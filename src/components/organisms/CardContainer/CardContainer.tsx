import { Grid } from "@mui/material";
import React from "react";

interface ICardContainer {
    children?: React.ReactNode;
}

export const CardContainer: React.FC<ICardContainer> = ({ children }) => {
    return (
        <Grid container spacing={2} sx={{ paddingBottom: 8 }}>
            {children}
        </Grid>
    );
};
