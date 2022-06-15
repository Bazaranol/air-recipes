import React, { MouseEventHandler } from "react";
import "./button.css";
import Button from "@mui/material/Button";

interface IButton {
    text?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const FilledButton: React.FC<IButton> = ({ text, onClick }) => {
    return (
        <Button variant="contained" className="filled" onClick={onClick}>
            {text}
        </Button>
    );
};
export const LinedButton: React.FC<IButton> = ({ text, onClick }) => {
    return (
        <Button variant="outlined" className="lined" onClick={onClick}>
            {text}
        </Button>
    );
};
