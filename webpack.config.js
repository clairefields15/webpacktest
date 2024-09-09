const fs = require("fs");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

// App directory
const appDirectory = fs.realpathSync(process.cwd());

// Gets absolute path of file within app directory
const resolveAppPath = (relativePath) =>
    path.resolve(appDirectory, relativePath);

// Host
const host = process.env.HOST || "localhost";

const sassLoader = {
    loader: "sass-loader",
};

module.exports = ({ mode, env }) => {
    const isModeProduction = mode === "production";

    const styleLoader = {
        loader: isModeProduction ? MiniCssExtractPlugin.loader : "style-loader",
    };

    const getEnv = () => {
        if (mode === "development" && fs.existsSync("./.env.local")) {
            return "local";
        }
        return env;
    };

    const getOutputFileName = () => {
        return isModeProduction
            ? "static/js/[name].[contenthash:8].js"
            : "static/js/bundle.js";
    };

    return {
        mode,
        entry: "./src/index.tsx",
        output: {
            library: "Components",
            path: path.resolve(__dirname, "build"),
            filename: getOutputFileName(),
        },
        devtool: isModeProduction ? undefined : "eval-source-map",
        ignoreWarnings: [
            {
                message:
                    /mini-css-extract-plugin[^]*Conflicting order. Following module has been added:/,
            },
        ],
        devServer: {
            // Serve index.html as the base
            static: {
                directory: resolveAppPath("public"),
            },
            // Enable compression
            compress: true,
            // Enable hot reloading
            hot: true,
            host,
            server: "https",
            port: 3000,
            allowedHosts: ["localhost:9999"],
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Headers":
                    "Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Traceparent, Request-Id",
                "Access-Control-Allow-Methods":
                    "GET, POST, PUT, DELETE, OPTIONS",
            },
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    options: { configFile: "tsconfig.json" },
                },
                {
                    test: /\.(sc|c)ss$/i,
                    exclude: /\.module\.(sc|c)ss$/i,
                    use: [
                        styleLoader,
                        {
                            loader: "css-loader",
                        },
                        sassLoader,
                    ],
                },
                {
                    test: /\.module\.(sc|c)ss$/i,
                    use: [
                        styleLoader,
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: false,
                                modules: {
                                    localIdentName: "[local]___[hash:base64:5]",
                                    exportLocalsConvention: "camelCaseOnly",
                                },
                            },
                        },
                        sassLoader,
                    ],
                },
            ],
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js"],
        },
        plugins: [
            new HtmlWebpackPlugin({
                inject: true,
                scriptLoading: "blocking",
                template: resolveAppPath("public/index.html"),
            }),
            new Dotenv({
                path: `./.env.${getEnv()}`,
            }),
        ].concat(isModeProduction ? [new MiniCssExtractPlugin()] : []),
        optimization: {
            minimize: isModeProduction,
            minimizer: [
                // This is only used in production mode
                new TerserPlugin({
                    terserOptions: {
                        parse: {
                            // we want terser to parse ecma 8 code. However, we don't want it
                            // to apply any minfication steps that turns valid ecma 5 code
                            // into invalid ecma 5 code. This is why the 'compress' and 'output'
                            // sections only apply transformations that are ecma 5 safe
                            // https://github.com/facebook/create-react-app/pull/4234
                            ecma: 8,
                        },
                        compress: {
                            ecma: 5,
                            warnings: false,
                            // Disabled because of an issue with Uglify breaking seemingly valid code:
                            // https://github.com/facebook/create-react-app/issues/2376
                            // Pending further investigation:
                            // https://github.com/mishoo/UglifyJS2/issues/2011
                            comparisons: false,
                            // Disabled because of an issue with Terser breaking valid code:
                            // https://github.com/facebook/create-react-app/issues/5250
                            // Pending futher investigation:
                            // https://github.com/terser-js/terser/issues/120
                            inline: 2,
                        },
                        mangle: {
                            safari10: true,
                        },
                        output: {
                            ecma: 5,
                            comments: false,
                            // Turned on because emoji and regex is not minified properly using default
                            // https://github.com/facebook/create-react-app/issues/2488
                            ascii_only: true,
                        },
                    },
                }),
            ],
        },
        performance: false,
    };
};
