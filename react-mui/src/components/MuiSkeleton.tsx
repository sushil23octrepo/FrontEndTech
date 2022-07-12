import { Stack, Skeleton, Box, Avatar, Typography } from "@mui/material"
import { useState, useEffect } from "react"

export const MuiSkeleton = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, [])

    return (
        // <Stack spacing={2} width="250px">
        //     <Skeleton variant="text"/>
        //     <Skeleton variant="text" animation={false}/>
        //     <Skeleton variant="circular" width={40} height={40}/>
        //     <Skeleton variant="rectangular" width={250} height={125}/>
        //     <Skeleton variant="rectangular" animation="wave" width={250} height={125}/>
        // </Stack>
        <Box sx={{ width: '256px' }}>
            {
                loading ? (
                    <Skeleton variant="rectangular" width={256} height={144} />
                ) : (
                    <img src="https://source.unsplash.com/random/256x144" alt="Skeleton" width={256} height={144} />
                )
            }
            <Stack direction="row" spacing={1} sx={{ width: '100px', marginTop: '12px' }}>
                {
                    loading ? (
                        <Skeleton variant="circular" width={40} height={40} animation="wave" />
                    ) : (
                        <Avatar>V</Avatar>
                    )
                }
            </Stack>

            <Stack direction="row" spacing={1} sx={{ width: '80%' }}>
                {
                    loading ? (
                        <>
                            <Typography variant="body1">
                                <Skeleton variant="text" width='100%' animation="wave" />
                            </Typography>
                            <Typography variant="body2">
                                <Skeleton variant="text" width='100%' animation="wave" />
                            </Typography>
                        </>
                    ) : (
                        <>
                            <Typography variant="body1">React MUI Tutorials</Typography>
                        </>
                    )
                }
            </Stack>

        </Box>
    )
}
