import { FilterList, SearchOutlined } from "@mui/icons-material";
import CancelIcon from "@mui/icons-material/Cancel";
import { Button, IconButton, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { SearchContext } from "../../templates/Layout";
import { ModalFilter } from "../Modal/Modal";
import "./header.css";
import image from "../../../assets/jpg/header.jpg";
interface ISetValue {
    setValue: (search: string) => void;
}
export const Header: React.FC<ISetValue> = ({ setValue }) => {
    const [open, setOpen] = useState(false);
    const [print, setPrint] = useState(false);
    const search = useContext(SearchContext);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const setSearch = (search: string) => setValue(search);
    return (
        <div className="headerOut">
            <div className="header">
                <div className="title">
                    <h1>Air Recipes</h1>
                    <div className="subtitle">Best Recipes for Best people</div>
                    <div className="search">
                        <TextField
                            value={search}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                setSearch(e.target.value);
                                if (e.target.value != "") setPrint(true);
                                else setPrint(false);
                            }}
                            fullWidth
                            id="standard-bare"
                            variant="outlined"
                            placeholder="Search"
                            InputProps={{
                                startAdornment: (
                                    <IconButton sx={{ color: "#A9A9A9" }}>
                                        <SearchOutlined />
                                    </IconButton>
                                ),
                                endAdornment: (
                                    <IconButton
                                        sx={{
                                            color: "#A9A9A9",
                                            display: print ? "" : "none",
                                        }}
                                        onClick={() => {
                                            setSearch("");
                                            setPrint(false);
                                        }}
                                    >
                                        <CancelIcon />
                                    </IconButton>
                                ),
                            }}
                            sx={{
                                marginRight: 4,
                                borderColor: "#DDD",
                                [`& fieldset`]: {
                                    borderRadius: 10,
                                },
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    "& > fieldset": {
                                        borderColor: "#A9A9A9",
                                    },
                                },
                                "& .MuiOutlinedInput-root:hover": {
                                    "& > fieldset": {
                                        borderColor: "#A9A9A9",
                                    },
                                },
                            }}
                        />
                        <Button
                            onClick={handleClickOpen}
                            variant="outlined"
                            startIcon={<FilterList />}
                            className="filterButton"
                            sx={{
                                color: "black",
                                borderColor: "#DDD",
                                ":hover": {
                                    bgcolor: "#FFF",
                                    borderColor: "#82786A",
                                },
                            }}
                        ></Button>
                        <ModalFilter handleClose={handleClose} open={open} />
                    </div>
                </div>
                <div className="image">
                    <img src={image} alt="image" />
                </div>
            </div>
        </div>
    );
};
