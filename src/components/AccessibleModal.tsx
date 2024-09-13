import React from 'react';
import { useTheme } from '@mui/material-pigment-css';
import { Box, Modal, SxProps, Theme } from '@mui/material';
import CloseModalButton from './CloseModalButton';
import { UseDialogType } from '../hooks/useDialog.hook';

type AccessibleModalProps = {
	modal: UseDialogType;
	header: string;
	children: React.ReactNode;
	description?: string | React.ReactNode;
	sx?: SxProps<Theme>;
	onClose?: () => void;
	width?: React.CSSProperties['width'];
	height?: React.CSSProperties['height'];
	zIndex?: React.CSSProperties['zIndex'];
	pauseFocusTrap?: boolean;
	helpContent?: React.ReactNode;
};

export default function AccessibleModal({
	modal,
	header,
	description,
	children,
	sx,
	onClose,
	width = '600px',
	height = 'auto',
	zIndex = undefined,
	pauseFocusTrap,
}: AccessibleModalProps) {
	const isTouchDevice = false;
	const handleClose = (): void => {
		if (typeof onClose === 'function') {
			onClose();
		}
		modal.close();
	};

	const theme = useTheme();

	if (!zIndex) {
		zIndex = theme.zIndex.modal;
	}

	return (
		<Modal
			sx={{
				zIndex,
			}}
			className="modal-root"
			open={modal.state.isOpen}
			onClose={handleClose}
			aria-labelledby="modal-title"
			aria-describedby="modal-desc"
			disableEnforceFocus={pauseFocusTrap}>
			<Box
				component="div"
				className="default-modal-styles"
				sx={[
					{
						width: isTouchDevice ? '90% !important' : width,
						height: height,
					},
					...(Array.isArray(sx) ? sx : [sx]),
				]}>
				<CloseModalButton onClick={handleClose} />

				<h2 id="modal-title">{header}</h2>
				{description && <p id="modal-desc">{description}</p>}
				{children}
			</Box>
		</Modal>
	);
}
