import React, { useState } from 'react';
import { Box, TextField, MenuItem, Stack } from '@mui/material';

export const MuiSelect = () => {
    const [country, setCountry] = useState('');
    const [countries, setCountris] = useState<string[]>([]);

    const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value as string);
        alert(e.target.value)
    }

    const handleCountriesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCountris(typeof value == "string" ? value.split(',') : value);
        alert(e.target.value)
    }

    return (
        <Stack spacing={2} direction="row">
            <Box width={250}>
                <TextField label="Select Country" value={country} fullWidth select onChange={handleCountryChange}>
                    <MenuItem value="ind">India </MenuItem>
                    <MenuItem value="us">USA </MenuItem>
                    <MenuItem value="aus">Australia </MenuItem>
                </TextField>
            </Box>
            <Box width={250}>
                <TextField label="Select Country" value={countries} SelectProps={{ multiple: true }} fullWidth
                    select onChange={handleCountriesChange}>
                    <MenuItem value="ind">India </MenuItem>
                    <MenuItem value="us">USA </MenuItem>
                    <MenuItem value="aus">Australia </MenuItem>
                </TextField>
            </Box>
        </Stack>
    )
}
