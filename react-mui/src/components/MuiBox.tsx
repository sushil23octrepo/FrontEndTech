import { Box } from "@mui/material";

export const MuiBox = () => {
  return (
    <Box component="span"
    sx={{
        backgroundColor:'primary.main',
        color:"white",
        height:"100px",
        width:"200px",
        padding:"16px",
        "&:hover":{
            backgroundColor:"primary.light"
        }
    }} >Mui Box Demo</Box>
  )
}
