import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';

export function FormExample() {
	return (
		<FormControl>
			<InputLabel htmlFor="my-input">Email address</InputLabel>
			<Input id="my-input" aria-describedby="my-helper-text" />
			<FormHelperText id="my-helper-text">
				We'll never share your email.
			</FormHelperText>
		</FormControl>
	);
}
