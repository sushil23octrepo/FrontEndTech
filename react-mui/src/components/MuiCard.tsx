import { Box, Card, CardContent, Typography,CardActions,Button,CardMedia } from "@mui/material"
export const MuiCard = () => {
    return (
        <Box width="300px">
            <Card>
                <CardMedia component="img" 
                height="140px"
                image="https://source.unsplash.com/random"
                />

                <CardContent>
                    <Typography gutterBottom component="div" variant="h5">
                        Random Text
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                         Nam ipsam consequatur sint omnis? Dignissimos voluptate, delectus fugiat dolores enim animi nihil 
                         distinctio quod sapiente sed tempore, consequuntur, modi accusamus deleniti?
                    </Typography>                    
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Box>
    )
}
