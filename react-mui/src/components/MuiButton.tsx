import { Button, Stack, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
export const MuiButton = () => {
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction="row">
                <Button variant="text">Text Button</Button>
                <Button href="https://google.com" variant="text">Text Button with link</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
            <Stack spacing={2} direction="row">
                <Button variant="contained" color="primary">Primary</Button>
                <Button variant="contained" color="secondary">secondary</Button>
                <Button variant="contained" color="error" >error</Button>
                <Button variant="contained" color="warning">warning</Button>
                <Button variant="contained" color="info">info</Button>
                <Button variant="contained" color="success">success</Button>

            </Stack>

            <Stack display="block" spacing={2} direction="row">
                <Button variant="contained" size="small">Small</Button>
                <Button variant="contained" size="medium">Medium</Button>
                <Button variant="contained" size="large">Large</Button>
            </Stack>

            <Stack spacing={2} direction="row">
                <Button variant="contained" startIcon={<SendIcon />} >Send</Button>
                <Button variant="contained" endIcon={<SendIcon />} >Send</Button>
                <IconButton>
                    <SendIcon />
                </IconButton>
            </Stack>


            <Stack direction="row">
                <ButtonGroup variant="contained">
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>
        </Stack>
    )
}
