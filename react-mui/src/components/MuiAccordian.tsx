import { Accordion,AccordionSummary,AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export const MuiAccordian = () => {
    const [expanded,setExpanded]=useState<string|false>(false);
    const handleChange=(isExpanded:boolean,panel:string)=>{
        setExpanded(isExpanded?panel:false);
    }
  return (
    <div>
        <Accordion expanded={expanded=="panel1"} onChange={(event,isExpended)=>handleChange(isExpended,'panel1')}>
            <AccordionSummary id="panel1-header" expandIcon={<ExpandMoreIcon/>}>
                <Typography>Accordian 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Repellat similique fugiat unde est numquam accusantium in suscipit eos nihil minima magni,
                     cumque enim ipsum quisquam vero quidem et natus cum!
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded=="panel2"} onChange={(event,isExpended)=>handleChange(isExpended,'panel2')}>
            <AccordionSummary id="panel2-header" expandIcon={<ExpandMoreIcon/>}>
                <Typography>Accordian 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Repellat similique fugiat unde est numquam accusantium in suscipit eos nihil minima magni,
                     cumque enim ipsum quisquam vero quidem et natus cum!
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded=="panel3"} onChange={(event,isExpended)=>handleChange(isExpended,'panel3')}>
            <AccordionSummary id="panel3-header" expandIcon={<ExpandMoreIcon/>}>
                <Typography>Accordian 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Repellat similique fugiat unde est numquam accusantium in suscipit eos nihil minima magni,
                     cumque enim ipsum quisquam vero quidem et natus cum!
                </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}
