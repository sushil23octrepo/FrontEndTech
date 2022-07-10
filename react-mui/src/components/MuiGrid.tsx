import { Box, Grid } from "@mui/material"
export const MuiGrid = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item p={2} md={3}>
                    <Box bgcolor="primary.light">Item 1</Box>
                </Grid>
                <Grid item p={2} md={9}>
                    <Box bgcolor="primary.light">Item 2</Box>
                </Grid>
                <Grid item p={2} md={6}>
                    <Box bgcolor="primary.light">Item 3</Box>
                </Grid>
                <Grid item p={2} md={6}>
                    <Box bgcolor="primary.light">Item 4</Box>
                </Grid>
            </Grid>
        </>
    )
}
