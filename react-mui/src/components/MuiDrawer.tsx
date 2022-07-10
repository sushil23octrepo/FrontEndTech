import { Box, Drawer, Typography, IconButton } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { useState } from "react"

export const MuiDrawer = () => {
    const [isDrawerOpen, setisDrawerOpen] = useState(false);
    return (
        <>
            <IconButton onClick={() => setisDrawerOpen(true)} size="large" edge="start" color="inherit" aria-label="logo">
                <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={isDrawerOpen} onClose={() => setisDrawerOpen(false)}>
                <Box p={2} width="250px" textAlign="center" role="presentation">
                    <Typography variant="h6" component="div">
                        Side Panel
                    </Typography>
                </Box>
            </Drawer>
        </>
    )
}
