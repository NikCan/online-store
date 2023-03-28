import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {FC} from "react";
import {darkTheme} from "../../utils/themes";
import {ThemeProvider} from '@mui/material/styles'


export const InitialLoader: FC = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <ThemeProvider theme={darkTheme}>
        <CircularProgress size={100} color={'primary'}/>
      </ThemeProvider>
    </Box>
  )
}