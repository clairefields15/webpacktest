import { PartyMode } from '@mui/icons-material';
import { Button, Divider, IconButton } from '@mui/material';
import CloseModalButton from './CloseModalButton';
import GridComponent from './GridComponent';
import VisuallyHidden from './VisuallyHidden';
import VisuallyHiddenAsDiv from './VisuallyHiddenAsDiv';
import AccessibleModal from './AccessibleModal';
import useDialog from '../hooks/useDialog.hook';
import { FormExample } from './FormExample';

export const App = () => {
	const dialog = useDialog();

	return (
		<div>
			<h1>Hello!</h1>
			<Button color="primary">Primary Button!</Button>
			<Button color="secondary">Secondary Button!</Button>
			<Divider />
			<IconButton>
				<PartyMode />
			</IconButton>
			<CloseModalButton onClick={() => alert('close')} />
			{/* <GridComponent /> */}
			<VisuallyHidden />
			<VisuallyHiddenAsDiv />
			<Button onClick={() => dialog.open()}>Open Modal</Button>
			<AccessibleModal modal={dialog} header="Modal header">
				<div>Modal Child content</div>
			</AccessibleModal>
			<FormExample />
		</div>
	);
};
