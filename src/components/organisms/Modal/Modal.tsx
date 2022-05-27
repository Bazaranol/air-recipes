import styled from "@emotion/styled";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Slide from "@mui/material/Slide";
import Slider from "@mui/material/Slider";
import { TransitionProps } from "@mui/material/transitions";
import Typography from "@mui/material/Typography";
import { fontSize } from "@mui/system";
import React, { Dispatch, forwardRef, SetStateAction } from "react";
import { FilledButton, LinedButton } from "../../atoms/Button/Button";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};
const PrettoSlider = styled(Slider)({
    color: "#82786A",
    height: 2,
    "& .MuiSlider-track": {
        border: "none",
    },
    // "& .MuiSlider-thumb": {
    //     height: 24,
    //     width: 24,
    //     backgroundColor: "#fff",
    //     border: "2px solid currentColor",
    //     "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
    //         boxShadow: "inherit",
    //     },
    //     "&:before": {
    //         display: "none",
    //     },
    // },
    "& .MuiSlider-valueLabel": {
        // fontSize: "40px",
        fontWeight: 200,
        background: "unset",
        padding: 0,
        width: 40,
        height: 40,
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

export const ModalFilter: React.FC<IModal> = ({ handleClose, open }) => {
    const [value, setValue] = React.useState<number[]>([100, 1200]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
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
                <Box sx={style}>
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

                    <Box
                        sx={{
                            borderBottom: "1px solid #DDDDDD",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            mb: 1,
                        }}
                    >
                        <Typography
                            sx={{ display: "flex", alignItems: "center" }}
                        >
                            Caribbean
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
                    <Box
                        sx={{
                            borderBottom: "1px solid #DDDDDD",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            mb: 3,
                        }}
                    >
                        <Typography
                            sx={{ display: "flex", alignItems: "center" }}
                        >
                            Greek
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
                    <Box sx={{ width: 300 }}>
                        <PrettoSlider
                            min={100}
                            max={1200}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="on"
                            sx={{
                                color: "#82786A",
                                valueLabel: {
                                    fontSize: "4px !important",
                                },
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <LinedButton text="Clear" />
                        <FilledButton text="Show Recipes" />
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
};
