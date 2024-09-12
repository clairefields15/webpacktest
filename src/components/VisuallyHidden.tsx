import { Box } from '@mui/material';
import { visuallyHidden } from '@mui/utils';

export default function VisuallyHidden() {
	return (
		<Box component="span" sx={visuallyHidden}>
			'label'
		</Box>
	);
}
