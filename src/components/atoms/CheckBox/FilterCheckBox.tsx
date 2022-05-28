import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import React from "react";

interface IFilterCheckBox {
    title: string;
}
export const FilterCheckBox: React.FC<IFilterCheckBox> = ({ title }) => {
    return (
        <Box
            sx={{
                borderBottom: "1px solid #DDDDDD",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                mb: 1,
            }}
        >
            <Typography sx={{ display: "flex", alignItems: "center" }}>
                {title}
            </Typography>
            <Checkbox
                defaultChecked
                sx={{
                    color: "#82786A",
                    "&.Mui-checked": {
                        color: "#82786A",
                    },
                }}
            ></Checkbox>
        </Box>
    );
};
