import { Grid } from "@mui/material";
import React from "react";

interface ICardContainer {
    children?: React.ReactNode;
}

export const CardContainer: React.FC<ICardContainer> = ({ children }) => {
    return (
        <Grid
            width={"100%"}
            container
            spacing={{ xs: 1, sm: 2, md: 2, lg: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{ paddingBottom: 8 }}
        >
            {children}
        </Grid>
    );
};
