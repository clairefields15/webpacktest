import { InputLabel } from '@mui/material';
import Grid from '@mui/material-pigment-css/Grid';

export default function GridComponent() {
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
