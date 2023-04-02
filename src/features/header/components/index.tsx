import {FC} from 'react'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import WorkIcon from '@mui/icons-material/WorkOutline'
import Chip from '@mui/material/Chip'
import {ThemeProvider} from '@mui/material/styles'
import {darkTheme} from 'common/utils/constants/themes'
import logo from 'assets/images/logo.png'
import {useNavigate} from 'react-router-dom'
import {PATH} from 'common/utils/constants/path'
import {useCart} from 'features/cart/hooks/useCart'
import {Logo, StyledAppBar, StyledTypography} from 'features/header/style/header-styles'

export const Header: FC = () => {
  const navigate = useNavigate()
  const {quantity, sum} = useCart()

  return (
    <Box sx={{flexGrow: 1}}>
      <ThemeProvider theme={darkTheme}>
        <StyledAppBar>
          <Toolbar>
            <Logo onClick={() => navigate(PATH.HOME)} src={logo} alt="logo"/>
            <StyledTypography>Motorcycle equipment store</StyledTypography>
            <Chip label={'$ ' + sum} variant="outlined"/>
            <IconButton size="large" color="inherit" onClick={() => navigate(PATH.CART)}>
              <Badge badgeContent={quantity} color="error"><WorkIcon/></Badge>
            </IconButton>
          </Toolbar>
        </StyledAppBar>
      </ThemeProvider>
    </Box>
  )
}
