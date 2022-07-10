import { Stack, TextField, InputAdornment } from "@mui/material"
import { useState } from "react"
export const MuiTextBox = () => {
    const [value, setValue] = useState('')
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction="row">
                <TextField label="Name" variant="outlined"></TextField>
                <TextField label="Name" variant="filled"></TextField>
                <TextField label="Name" variant="standard"></TextField>
            </Stack>

            <Stack spacing={2} direction="row">
                <TextField label="Small Secondary" size="small" color="secondary"></TextField>
            </Stack>

            <Stack spacing={2} direction="row">
                <TextField label="Required" required></TextField>
                <TextField label="With Helper Text"
                    helperText="Please enter valid value.." />

                <TextField label="Disabled" disabled size="small" color="secondary"></TextField>
                <TextField label="Readonly" inputProps={{ readOnly: true }} size="small" color="secondary"></TextField>

            </Stack>

            <Stack spacing={3} direction="row">
                <TextField label="Amount" InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>
                }}
                />

                <TextField label="Weight" InputProps={{
                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>
                }}
                />

                <TextField required value={value} label="Form control Password" type="password" onChange={e => { setValue(e.target.value) }}
                    error={!value} helperText={!value ? "Required" : "Do not share password with anyone."}
                />
            </Stack>

        </Stack>
    )
}
