import { Stack, Badge } from "@mui/material"
import MailIcon from "@mui/icons-material/Mail"

export const MuiBadge = () => {
    return (
        <Stack spacing={2} direction="row">
            <Badge color="primary" badgeContent={5}>
                <MailIcon />
            </Badge>
            <Badge color="secondary" badgeContent={5}>
                <MailIcon />
            </Badge>
            <Badge color="secondary" badgeContent={0}>
                <MailIcon />
            </Badge>
            <Badge color="secondary" showZero badgeContent={0}>
                <MailIcon />
            </Badge>
            <Badge color="primary" variant="dot">
                <MailIcon />
            </Badge>
        </Stack>
    )
}
