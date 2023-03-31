import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import {FC} from "react";


export const Loader: FC = () => {
    return (
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Stack sx={{width: '100%', color: 'grey.500'}} spacing={2}>
                    <LinearProgress color="inherit"/>
                </Stack>
        </Box>
    )
}