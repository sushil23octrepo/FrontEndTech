import { Stack, Autocomplete, TextField } from "@mui/material"
import { useState } from "react";

type Skill = {
    id: number;
    label: string;
}
const skills = ["HTML", "CSS", "Java Script", "Type Script", "React"];
const skillOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill
}));

export const MuiAutocomplete = () => {
    const [value, setValue] = useState<string | null>(null);
    const [skill, setSkill] = useState<Skill | null>(null);
    console.log({ value });
    console.log({ skill });
    return (
        <Stack spacing={2} width={250}>
            <Autocomplete options={skills} renderInput={(params) => <TextField {...params} />}
                value={value} onChange={(e: any, newValue: string | null) => setValue(newValue)}
                freeSolo />

            <Autocomplete options={skillOptions} renderInput={(params) => <TextField {...params} />}
                value={skill} onChange={(e: any, newValue: Skill | null) => setSkill(newValue)}
            />
        </Stack>
    )
}
