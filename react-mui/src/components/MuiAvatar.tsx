import { Stack, Avatar, AvatarGroup } from "@mui/material"

export const MuiAvatar = () => {
    return (
        <>
            <Stack mt={2} direction="row" spacing={2}>
                <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
                <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
            </Stack>

            <Stack mt={2} direction="row" spacing={2}>
                <Avatar alt="women" src="https://randomuser.me/api/portraits/women/79.jpg" sx={{ bgcolor: "primary.light" }} />
                <Avatar alt="men" src="https://randomuser.me/api/portraits/men/51.jpg" sx={{ bgcolor: "success.light" }} />
            </Stack>

            <Stack mt={2} direction="row" spacing={2}>
                <AvatarGroup>
                    <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
                    <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
                    <Avatar alt="women" src="https://randomuser.me/api/portraits/women/79.jpg" sx={{ bgcolor: "primary.light" }} />
                    <Avatar alt="men" src="https://randomuser.me/api/portraits/men/51.jpg" sx={{ bgcolor: "success.light" }} />
                </AvatarGroup>
            </Stack>

            <Stack mt={2} direction="row" spacing={2}>
                <AvatarGroup max={3}>
                    <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
                    <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
                    <Avatar alt="women" src="https://randomuser.me/api/portraits/women/79.jpg" sx={{ bgcolor: "primary.light" }} />
                    <Avatar alt="men" src="https://randomuser.me/api/portraits/men/51.jpg" sx={{ bgcolor: "success.light" }} />
                </AvatarGroup>
            </Stack>

            <Stack mt={2} direction="row" spacing={2}>
                <Avatar variant="square" alt="women" src="https://randomuser.me/api/portraits/women/79.jpg" sx={{ bgcolor: "primary.light" }} />
                <Avatar variant="rounded" alt="men" src="https://randomuser.me/api/portraits/men/51.jpg" sx={{ bgcolor: "success.light" }} />
            </Stack>
        </>
    )
}
