import { PartyMode } from "@mui/icons-material";
import { Button, Divider, IconButton } from "@mui/material";

export const App = () => (
    <div>
        <h1>Hello!</h1>
        <Button color="primary">Primary Button!</Button>
        <Button color="secondary">Secondary Button!</Button>
        <Divider />
        <IconButton>
            <PartyMode />
        </IconButton>
    </div>
);
