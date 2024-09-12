import { useState } from 'react';

export type UseDialogType = {
	state: {
		isOpen: boolean;
	};
	open: () => void;
	close: () => void;
	toggleOpen: () => void;
};

type UseDialogConfig = undefined | { isOpen: boolean };

export default function useDialog(config?: UseDialogConfig): UseDialogType {
	const [isOpen, setIsOpen] = useState(config?.isOpen ?? false);

	const open = () => {
		setIsOpen(true);
	};

	const close = () => {
		setIsOpen(false);
	};

	const toggleOpen = () => {
		setIsOpen((state) => !state);
	};

	return {
		state: {
			isOpen,
		},
		open,
		close,
		toggleOpen,
	};
}
