import {FC} from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {ThemeProvider} from '@mui/material/styles'
import {darkTheme} from "common/utils/themes";
import logo from 'assets/images/logo.png'
import Badge from '@mui/material/Badge';
import WorkIcon from '@mui/icons-material/WorkOutline';
import Chip from '@mui/material/Chip';
import {useNavigate} from "react-router-dom";
import {PATH} from "common/utils/path";

type Props = {
  goodsFromLS: string[]
}

export const Header: FC<Props> = ({goodsFromLS}) => {
  const navigate = useNavigate()
  const amount = goodsFromLS.length
  const sum = '$ 100.00'
  return (
    <Box sx={{flexGrow: 1}}>
      <ThemeProvider theme={darkTheme}>
        <AppBar sx={{height: '70px'}} position="static">
          <Toolbar>
            <img onClick={()=>navigate(PATH.HOME)} style={{height: '70%', cursor: 'pointer'}} src={logo} alt="logo"/>
            <Typography variant="h6" component="div" sx={{flexGrow: 1, marginLeft: '20px'}}>
              Motorcycle equipment store
            </Typography>
            <Chip label={sum} variant="outlined" />
            <IconButton
              size="large"
              color="inherit"
              onClick={()=>navigate(PATH.CART)}
            >
              <Badge badgeContent={amount} color="error">
                <WorkIcon/>
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  )
}
