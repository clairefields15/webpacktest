import {
	FormControl,
	FormControlLabel,
	FormHelperText,
	Input,
	InputLabel,
	MenuItem,
	Select,
	Switch,
	TextField,
} from '@mui/material';
import { useState } from 'react';

export function FormExample() {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<>
			<FormControl>
				<InputLabel htmlFor="my-input">Email address</InputLabel>
				<Input id="my-input" aria-describedby="my-helper-text" />
				<FormHelperText id="my-helper-text">
					We'll never share your email.
				</FormHelperText>
			</FormControl>
			<Input />
			<TextField label="hi" />
			<FormControlLabel
				control={
					<Switch
						checked={isChecked}
						onChange={() => setIsChecked((s: boolean) => !s)}
					/>
				}
				label="switch"
			/>
			<FormControl>
				<InputLabel id="location-select-label">location</InputLabel>
				<Select
					id="location-select"
					labelId="location-select-label"
					value="here"
					label="location">
					{['here', 'there', 'anywhere'].map((item) => (
						<MenuItem key={item} value={item}>
							{item}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</>
	);
}
