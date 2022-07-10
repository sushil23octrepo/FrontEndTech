import { AppBar, Toolbar, IconButton, Typography, Button, Stack, Menu, MenuItem } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import React, { useState } from "react";
import  KeyboardArrowDownIcon  from "@mui/icons-material/KeyboardArrowDown";

export const MuiMenu = () => {
    const [anchorEl, setanchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setanchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setanchorEl(null);
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                    <CatchingPokemonIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    POKEMON APP
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Button color="inherit">Features</Button>
                    <Button color="inherit">Pricing</Button>
                    <Button color="inherit">About</Button>
                    <Button id="resource-button" color="inherit"
                        aria-controls={open ? "resources-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? true : undefined}
                        onClick={handleClick} endIcon={<KeyboardArrowDownIcon/>}
                        >Resources</Button>
                    
                    <Button color="inherit">Login</Button>
                </Stack>
                <Menu id="resources-menu" open={open}
                    onClose={handleClose}
                    anchorEl={anchorEl}
                    MenuListProps={{ "aria-labelledby": "resource-button" }}
                    anchorOrigin={{
                        vertical:"bottom",
                        horizontal:"right"
                    }}
                    transformOrigin={{
                        vertical:"top",
                        horizontal:"right"
                    }}
                >
                    <MenuItem>Blog</MenuItem>
                    <MenuItem>Podcast</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}
