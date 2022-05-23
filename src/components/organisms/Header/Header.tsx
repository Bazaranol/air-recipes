import { FilterList, SearchOutlined } from "@mui/icons-material";
import { Button, IconButton, TextField } from "@mui/material";
import React from "react";
import "./header.css";
import image from "./header.jpg";

export const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="title">
                <h1>Air Recipes</h1>
                <div className="subtitle">Best Recipes for Best people</div>
                <div className="search">
                    <TextField
                        fullWidth
                        id="standard-bare"
                        variant="outlined"
                        placeholder="Search"
                        InputProps={{
                            startAdornment: (
                                <IconButton>
                                    <SearchOutlined />
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
                </div>
            </div>
            <div className="image">
                <img src={image} alt="image" />
            </div>
        </div>
    );
};
