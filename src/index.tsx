import React from "react";
import ReactDOM from "react-dom";

const App = () => <h1>Hello, React with TypeScript!</h1>;

import { createRoot } from "react-dom/client";

const domNode = document.getElementById("root");
if (domNode) {
    const root = createRoot(domNode);
    root.render(<App />);
}
