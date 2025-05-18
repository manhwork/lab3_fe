import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

import "./styles.css";

function TopBar() {
    let title = "Photo Sharing App";

    return (
        <AppBar className="topbar-appBar" position="absolute">
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" color="inherit">
                        Manh Nguyen App
                    </Typography>
                </Box>
                <Typography variant="h6" color="inherit">
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;
