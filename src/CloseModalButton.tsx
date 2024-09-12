import Close from "@mui/icons-material/Close";
import { IconButton, SxProps } from "@mui/material";

type CloseModalButtonProps = {
    onClick: (event: React.KeyboardEvent | React.MouseEvent) => void;
};

const buttonStyle: SxProps = { position: "absolute", top: 10, right: 10 };

export default function CloseModalButton({
    onClick,
}: CloseModalButtonProps): JSX.Element {
    return (
        <IconButton
            onClick={onClick}
            size="small"
            sx={buttonStyle}
            aria-label="Close Modal"
        >
            <Close />
        </IconButton>
    );
}
