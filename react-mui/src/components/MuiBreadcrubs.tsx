import { Box, Typography, Breadcrumbs, Link } from "@mui/material"
import  NavigateNextIcon  from "@mui/icons-material/NavigateNext"

export const MuiBreadcrubs = () => {
    return (
        <>
            <Box m={4}>
                <Breadcrumbs aria-label="bread crumb">
                    <Link underline="hover" href="#">Home</Link>
                    <Link underline="hover" href="#">Catalog</Link>
                    <Link underline="hover" href="#">Accessaries</Link>
                    <Typography color="text.primary">Shoes</Typography>
                </Breadcrumbs>
            </Box>

            <Box m={4}>
                <Breadcrumbs aria-label="bread crumb" separator="-">
                    <Link underline="hover" href="#">Home</Link>
                    <Link underline="hover" href="#">Catalog</Link>
                    <Link underline="hover" href="#">Accessaries</Link>
                    <Typography color="text.primary">Shoes</Typography>
                </Breadcrumbs>
            </Box>

            <Box m={4}>
                <Breadcrumbs aria-label="bread crumb" separator={<NavigateNextIcon/>}>
                    <Link underline="hover" href="#">Home</Link>
                    <Link underline="hover" href="#">Catalog</Link>
                    <Link underline="hover" href="#">Accessaries</Link>
                    <Typography color="text.primary">Shoes</Typography>
                </Breadcrumbs>
            </Box>

            <Box m={4}>
                <Breadcrumbs aria-label="bread crumb" separator={<NavigateNextIcon/>} maxItems={2}>
                    <Link underline="hover" href="#">Home</Link>
                    <Link underline="hover" href="#">Catalog</Link>
                    <Link underline="hover" href="#">Accessaries</Link>
                    <Typography color="text.primary">Shoes</Typography>
                </Breadcrumbs>
            </Box>

            <Box m={4}>
                <Breadcrumbs aria-label="bread crumb" separator={<NavigateNextIcon/>} maxItems={3} itemsBeforeCollapse={2}>
                    <Link underline="hover" href="#">Home</Link>
                    <Link underline="hover" href="#">Catalog</Link>
                    <Link underline="hover" href="#">Accessaries</Link>
                    <Typography color="text.primary">Shoes</Typography>
                </Breadcrumbs>
            </Box>
        </>
    )
}
