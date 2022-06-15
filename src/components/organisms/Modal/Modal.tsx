import styled from "@emotion/styled";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import React, { useRef, useState } from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import {
    calories,
    caribbean,
    chinese,
    french,
    greek,
    indian,
} from "../../../store/reducers/filterSlice";
import { FilledButton, LinedButton } from "../../atoms/Button/Button";
import { FilterCheckBox } from "../../atoms/CheckBox/FilterCheckBox";
import "./modal.css";
const titles = ["Caribbean", "Greek", "French", "Indian", "Chinese"];
const PrettoSlider = styled(Slider)({
    color: "#82786A",
    height: 2,
    "& .MuiSlider-track": {
        border: "none",
    },
    "& .MuiSlider-thumb": {
        height: 16,
        width: 16,
        border: "2px solid currentColor",
        "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
            boxShadow: "inherit",
        },
        "&:before": {
            display: "none",
        },
    },
    "& .MuiSlider-valueLabel": {
        fontWeight: 200,
        background: "unset",
        padding: 0,
        width: 31,
        height: 31,
        borderRadius: "50% 50% 50% 0",
        backgroundColor: "#82786A",
        transformOrigin: "bottom left",
        transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
        "&:before": { display: "none" },
        "&.MuiSlider-valueLabelOpen": {
            transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
        },
        "& > *": {
            transform: "rotate(45deg)",
        },
    },
});
interface IModal {
    handleClose: React.MouseEventHandler<HTMLButtonElement>;
    open: boolean;
}
const initialState = {
    bool: true,
    num: [100, 1200],
};

export const ModalFilter: React.FC<IModal> = ({ handleClose, open }) => {
    const [toggle, setToggle] = useState(false);

    const handleClear = () => {
        dispatch(caribbean(initialState.bool));
        dispatch(greek(initialState.bool));
        dispatch(french(initialState.bool));
        dispatch(indian(initialState.bool));
        dispatch(chinese(initialState.bool));
        dispatch(calories(initialState.num));
        clear();
    };
    const clear = () => {
        setToggle(true);
        setValue(initialState.num);
    };
    const handleToggle = (bool: boolean) => {
        setToggle(bool);
    };
    const checkRef = useRef();
    const dispatch = useAppDispatch();
    const [value, setValue] = React.useState<number[]>([100, 1200]);
    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
        dispatch(calories(value));
    };
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box className="modalBox">
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            mb: 2,
                        }}
                    >
                        <Typography
                            id="modal-modal-title"
                            variant="h5"
                            component="h3"
                            sx={{ fontWeight: 800 }}
                        >
                            Filter
                        </Typography>
                        <Typography
                            onClick={handleClose}
                            sx={{
                                fontWeight: 800,
                                color: "#82786A",
                                cursor: "pointer",
                            }}
                        >
                            &#10006;
                        </Typography>
                    </Box>
                    <Box mb={2} ref={checkRef}>
                        {titles.map((title, index) => (
                            <FilterCheckBox
                                key={index}
                                title={title}
                                index={index}
                                toggle={toggle}
                                toggleBack={() => handleToggle(toggle)}
                            />
                        ))}
                    </Box>

                    <Box sx={{ width: 370, marginBottom: "50px" }}>
                        <PrettoSlider
                            min={100}
                            max={1200}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="on"
                            sx={{
                                mt: 5,
                                color: "#82786A",
                            }}
                        />
                        <Box fontFamily={"Roboto"}>Calories, KCal</Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <LinedButton text="Clear" onClick={handleClear} />
                        <FilledButton
                            text="Show Recipes"
                            onClick={handleClose}
                        />
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
};
