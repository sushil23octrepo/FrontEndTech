import {
    FormControl,
    Box,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio
} from "@mui/material"

import React, { useState } from "react";

export const MuiRadioButton = () => {
    const [value, setValue] = useState('');
    console.log(value);

    const handleChanage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return (
        <Box>
            <FormControl>
                <FormLabel id="job-exp-group-label">
                    Year of experience
                </FormLabel>
                <RadioGroup name="job-exp-group" value={value} onChange={handleChanage} 
                aria-label="job-exp-group-label" row>
                    <FormControlLabel control={<Radio />} label="0-2" value="0-2"></FormControlLabel>
                    <FormControlLabel control={<Radio />} label="3-5" value="3-5"></FormControlLabel>
                    <FormControlLabel control={<Radio />} label="6-10" value="6-10"></FormControlLabel>
                </RadioGroup>
            </FormControl>
        </Box>
    )
}
