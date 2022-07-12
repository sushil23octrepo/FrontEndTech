import { Snackbar, Button, Alert, AlertProps } from "@mui/material";
import { useState, forwardRef } from "react";

const SnackBarAlert = forwardRef<HTMLDivElement, AlertProps>(
    function SnackBarAlert(props, ref) {
        return <Alert elevation={6} ref={ref} {...props} />
    }
)

export const MuiSnackBar = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Button onClick={() => setOpen(true)}>Sumbit</Button>
            {/* <Snackbar message="Form submitted successfully.."
    autoHideDuration={4000}
    open={open}
    onClose={()=>setOpen(false)}
    anchorOrigin={{
        vertical:"top",
        horizontal:"right"
        
    }}
    ></Snackbar> */}
            <Snackbar open={open} autoHideDuration={6000}
                onClose={() => setOpen(false)}>
                <SnackBarAlert onClose={() => setOpen(false)} severity="success">
                    Form submitted successfully..
                </SnackBarAlert>
            </Snackbar>
        </>
    )
}
