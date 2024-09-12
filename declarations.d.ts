import 'react';
import type { Theme, SxProps } from '@mui/material/styles';

declare module '*.module.scss' {
	const classes: { [key: string]: string };
	export default classes;
}

declare module 'react' {
	interface CSSProperties {
		[key: `--${string}`]: string | number;
	}
}

declare module '@mui/material-pigment-css' {
	interface ThemeArgs {
		theme: Theme;
	}
}

declare global {
	namespace React {
		interface HTMLAttributes<T> {
			sx?: SxProps<Theme>;
		}
		interface SVGProps<T> {
			sx?: SxProps<Theme>;
		}
	}
}
