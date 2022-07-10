import { AppBar, Toolbar, IconButton, Typography,Button,Stack } from "@mui/material";
import  CatchingPokemonIcon  from "@mui/icons-material/CatchingPokemon";

export const MuiNavbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit" aria-label="logo">
                    <CatchingPokemonIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{flexGrow:1}}>
                    POKEMON APP
                </Typography>
                <Stack direction="row" spacing={2}>
                    <button color="inherit">Features</button>
                    <button color="inherit">Pricing</button>
                    <button color="inherit">About</button>
                    <button color="inherit">Login</button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
