import { InputLabel } from '@mui/material';
import Grid from '@mui/material-pigment-css/Grid';

export default function GridComponent() {
	// runtime errors in this component
	// 	 TS2769: No overload matches this call.
	//   Overload 1 of 2, '(props: PolymorphicComponentProps<GridBaseProps & DetailsHTMLAttributes<HTMLDivElement>, undefined, HTMLAttributes<HTMLElement>>): Element', gave the following error.
	//     Type '{ xs: number; item: true; direction: "row"; }' is not assignable to type 'IntrinsicAttributes & Omit<Substitute<GridBaseProps & DetailsHTMLAttributes<HTMLDivElement>, HTMLAttributes<HTMLElement>>, "as" | "component"> & { ...; }'.
	//       Property 'xs' does not exist on type 'IntrinsicAttributes & Omit<Substitute<GridBaseProps & DetailsHTMLAttributes<HTMLDivElement>, HTMLAttributes<HTMLElement>>, "as" | "component"> & { ...; }'.
	//   Overload 2 of 2, '(props: GridBaseProps & DetailsHTMLAttributes<HTMLDivElement>): ReactNode', gave the following error.
	//     Type '{ xs: number; item: true; direction: "row"; }' is not assignable to type 'IntrinsicAttributes & GridBaseProps & DetailsHTMLAttributes<HTMLDivElement>'.
	//       Property 'xs' does not exist on type 'IntrinsicAttributes & GridBaseProps & DetailsHTMLAttributes<HTMLDivElement>'.
	return (
		<Grid container spacing={0}>
			<Grid xs={7} item direction="row">
				<InputLabel>Email Addresses</InputLabel>
			</Grid>
			<Grid xs={4} item direction="row">
				<InputLabel>Market</InputLabel>
			</Grid>
			<Grid xs={1} item direction="row"></Grid>
		</Grid>
	);
}
