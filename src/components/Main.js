import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Products } from "./Products";
import { AppNavbar } from "./AppNavbar";

const Main = () => {

    return (
        <>
        <AppNavbar />
        <BrowserRouter>
            <Routes>
                <Route path="/products" element={<Products />} />
                <Route exact path="/" element={<Navigate to="/products" replace />} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Main;