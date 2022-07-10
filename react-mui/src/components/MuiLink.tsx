import { Stack, Link,Typography } from "@mui/material"

export const MuiLink = () => {
    return (
        <Stack spacing={2} direction="row" m={4}>
            <Link href="#">Link</Link>
            <Link href="#" color="secondary">Secondary</Link>
            <Link href="#" color="secondary" underline="hover">Underlined Hover</Link>
            <Link href="#" color="secondary" underline="none">No underline</Link>
            <Typography variant="h6">
            <Link href="#" color="secondary">Typography Link</Link>
            </Typography>
        </Stack>
    )
}
