import React, { useState } from 'react';
import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from '@mui/material';
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Bookmark from "@mui/icons-material/Bookmark";


export const MuiCheckbox = () => {
    const [acceptTnC, setacceptTnC] = useState(false);
    const [Skills, setSkills] = useState<string[]>([]);
    console.log({ Skills });

    const hanleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setacceptTnC(event.target.checked);
    }

    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = Skills.indexOf(event.target.value);
        if(index==-1)
        setSkills([...Skills,event.target.value]);
        else
        setSkills(Skills.filter(fl=>fl!==event.target.value));
    }

    return (
        <Box>
            <Box>
                <FormControlLabel label="I accept tern and condition" checked={acceptTnC}
                    control={<Checkbox onChange={hanleChange} />} ></FormControlLabel>
            </Box>
            <Box>
                <Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<Bookmark />}></Checkbox>
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>
                        Skills
                    </FormLabel>
                    <FormGroup>
                        <FormControlLabel label="HTML"
                            control={<Checkbox value="HTML" checked={Skills.includes('HTML')} onChange={handleSkillChange} />} />
                        <FormControlLabel label="CSS"
                            control={<Checkbox value="CSS" checked={Skills.includes('CSS')} onChange={handleSkillChange} />} />
                        <FormControlLabel label="JavaScript"
                            control={<Checkbox value="JavaScript" checked={Skills.includes('JavaScript')} onChange={handleSkillChange} />} />
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    )
}
