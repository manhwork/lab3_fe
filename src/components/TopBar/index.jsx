import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/AuthContext";

function TopBar() {
    let title = "Photo Sharing App";
    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/login");
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };
    return (
        <AppBar className="topbar-appBar" position="absolute">
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                        <Typography variant="h6" color="inherit">
                            Manh Nguyen App
                        </Typography>
                    </Link>
                </Box>
                <Typography variant="h6" color="inherit">
                    {title}
                </Typography>
                {user ? (
                    <>
                        <Typography variant="h6" sx={{ ml: 2 }}>
                            Hi {user.first_name} {user.last_name}
                        </Typography>
                        <Button sx={{ ml: 2 }} color="error" variant="contained" onClick={handleLogout}>
                            Logout
                        </Button>
                    </>
                ) : (
                    <></>
                )}
                {/* <Link to={"/login"}>
                    <Button variant="contained">Please Login</Button>
                </Link>
                <Typography variant="h6" color="inherit">
                    <Link to={"/register"} style={{ textDecoration: "none", color: "white" }}>
                        Register
                    </Link>
                </Typography> */}
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;
