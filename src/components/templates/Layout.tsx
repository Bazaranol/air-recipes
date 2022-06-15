import Container from "@mui/material/Container";
import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../organisms/Header/Header";

export const SearchContext = createContext("");

export const Layout: React.FC = () => {
    const [search, setSearch] = useState<string>("");
    return (
        <SearchContext.Provider value={search}>
            <Container
                fixed
                sx={{
                    maxWidth: {
                        lg: "1200px",
                        md: "100%",
                        sm: "100%",
                        xs: "100%",
                    },
                    p: "0px",
                }}
            >
                <Header setValue={setSearch} />
                <Outlet />
            </Container>
        </SearchContext.Provider>
    );
};
