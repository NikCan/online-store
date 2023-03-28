import {FC} from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {ThemeProvider} from '@mui/material/styles'
import {darkTheme} from "../../utils/themes";

export const Header: FC = () => {

  return (
    <Box sx={{flexGrow: 1}}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
              Motorcycle equipment store
            </Typography>
            {/*<Button color="inherit">Login</Button>*/}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  )
}
