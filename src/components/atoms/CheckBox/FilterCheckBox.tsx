import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import {
    caribbean,
    chinese,
    french,
    greek,
    indian,
} from "../../../store/reducers/filterSlice";

interface IFilterCheckBox {
    title: string;
    index: number;
    toggle: boolean;
    toggleBack: (bool: boolean) => void;
}

export const FilterCheckBox: React.FC<IFilterCheckBox> = ({
    title,
    index,
    toggle,
    toggleBack,
}) => {
    useEffect(() => {
        if (toggle) {
            setChecked(toggle);
            handlerToggle();
        }
    }, [toggle]);
    const handlerToggle = () => {
        toggleBack(false);
    };
    const dispatch = useAppDispatch();
    const [checked, setChecked] = useState(true);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    useEffect(() => {
        switch (index) {
            case 0:
                dispatch(caribbean(checked));
                break;
            case 1:
                dispatch(greek(checked));
                break;
            case 2:
                dispatch(french(checked));
                break;
            case 3:
                dispatch(indian(checked));
                break;
            case 4:
                dispatch(chinese(checked));
                break;
            default:
                break;
        }
    }, [checked]);
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
                checked={checked}
                onChange={handleChange}
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
