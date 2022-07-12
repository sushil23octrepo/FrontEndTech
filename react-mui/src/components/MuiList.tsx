import { Box, List, ListItem, ListItemText, ListItemAvatar, 
    Avatar, ListItemIcon,ListItemButton,Divider } from "@mui/material"
import MailIcon from "@mui/icons-material/Mail"

export const MuiList = () => {
    return (
        <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
            <List>
                <ListItemButton>
                <ListItem disablePadding>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <MailIcon />
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary="List Item 1" secondary="Secondary Text"></ListItemText>
                </ListItem>
                </ListItemButton>
                <Divider/>
                <ListItem>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <MailIcon />
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary="List Item 2" secondary="Secondary Text"></ListItemText>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <MailIcon />
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary="List Item 3" secondary="Secondary Text"></ListItemText>
                </ListItem>
            </List>
        </Box>
    )
}
