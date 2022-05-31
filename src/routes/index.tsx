import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import logo from '../logo.svg'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={  <img src={logo}/>} />
            
            <Route path="*" element={<Navigate to="/home"/>}/>
        </Routes>
    );
}