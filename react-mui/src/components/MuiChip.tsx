import { Stack,Chip, Avatar, Alert } from "@mui/material"
import FaceIcon from "@mui/icons-material/Face"

export const MuiChip = () => {
  return (
    <Stack spacing={2} direction="row">
        <Chip label="Chip"/>
        <Chip label="Chip" color="primary"/>
        <Chip label="Chip Small" size="small"/>
        <Chip label="Chip Outlined" variant="outlined"/>
        <Chip label="Chip With Avatar" avatar={<Avatar>V</Avatar>}/>
        <Chip label="Chip With Icon" icon={<FaceIcon/>}/>
        <Chip label="Chip With Click" color="success" onClick={()=>alert("Chip clicked..")}/>
        <Chip label="Chip With Click" color="error"
         onClick={()=>alert("Chip clicked..")} onDelete={()=>alert("Chip Delete clicked..")}/>
    </Stack>
  )
}
