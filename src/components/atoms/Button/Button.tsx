import React from "react";
import "./button.css";
import Button from "@mui/material/Button";

interface IButton {
    text?: string;
}

export const FilledButton: React.FC<IButton> = ({ text }) => {
    return (
        <Button variant="contained" className="filled">
            {text}
        </Button>
    );
};
export const LinedButton: React.FC<IButton> = ({ text }) => {
    return (
        <Button variant="outlined" className="lined">
            {text}
        </Button>
    );
};
