import Container from "@mui/material/Container";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../organisms/Header/Header";

export const SearchContext = createContext("");
// type contextType = {
//     state: string;
//     setState: React.Dispatch<React.SetStateAction<string>>;
// };

export const Layout = () => {
    const [search, setSearch] = useState<string>("");
    const setValue = (search: string) => setSearch(search);
    useEffect(() => {
        console.log(search);
    }, [search]);
    return (
        <SearchContext.Provider value={search}>
            <Container fixed>
                <Header setValue={setSearch} />
                <Outlet />
            </Container>
        </SearchContext.Provider>
    );
};
