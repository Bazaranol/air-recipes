import Container from "@mui/material/Container";
import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../organisms/Header/Header";

export const Layout = () => {
    return (
        <Container fixed>
            <Header />
            <Outlet />
        </Container>
    );
};
