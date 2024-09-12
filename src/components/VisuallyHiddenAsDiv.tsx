import { visuallyHidden } from '@mui/utils';

export default function VisuallyHiddenAsDiv() {
	//even with the declarations.d.ts file I am unable to get around this sx error
	return <span sx={visuallyHidden}>'label'</span>;
}
