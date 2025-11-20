import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./templates/telas/Home";
import Login from "./templates/telas/Login";
import Perfil from "./templates/telas/Perfil";

import { useUser } from "./context/UserContext";

function PrivateRoute({ children }) {
    const { user } = useUser();
    return user ? children : <Navigate to="/login" replace />;
}

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/login" element={<Login />} />

                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/perfil"
                    element={
                        <PrivateRoute>
                            <Perfil />
                        </PrivateRoute>
                    }
                />

            </Routes>
        </BrowserRouter>
    );
}