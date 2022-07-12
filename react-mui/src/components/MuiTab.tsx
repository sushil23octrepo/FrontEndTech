import { Box,Tab } from "@mui/material"
import { TabContext,TabList,TabPanel } from "@mui/lab"
import React, { useState } from "react"
import FavoriteIcon from "@mui/icons-material/Favorite"

export const MuiTab = () => {
    const [value, setValue] = useState('1')
    const handleChange=(event:React.SyntheticEvent,newValue:string)=>{
        setValue(newValue);
    }
  return (
    <TabContext value={value}>
    <Box sx={{borderBotton:1,borderColor:'divider'}}>
        <TabList 
        aria-label="Tab Example" 
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        centered
        >
            <Tab label="Tab One" value='1' icon={<FavoriteIcon/>} iconPosition="start"/>
            <Tab label="Tab Two" value='2' disabled/>
            <Tab label="Tab Three" value='3'/>
        </TabList>
    </Box>
    <TabPanel value="1">Panel One</TabPanel>
    <TabPanel value="2">Panel Two</TabPanel>
    <TabPanel value="3">Panel Three</TabPanel>
    </TabContext>
  )
}
