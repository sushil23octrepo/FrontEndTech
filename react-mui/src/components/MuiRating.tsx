import { Stack, Rating } from "@mui/material"
import React, { useState } from "react"
export const MuiRating = () => {
    const [value, setValue] = useState<number | null>(null);
    console.log(value);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
        setValue(newValue);
    }
    return (
        <Stack>
            <Rating value={value} onChange={handleChange} precision={0.5} size="large" />
        </Stack>
    )
}
