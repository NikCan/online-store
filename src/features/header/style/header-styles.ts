import styled from 'styled-components'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'

export const StyledAppBar = styled(AppBar).attrs({
  position: 'static'
})``

export const Logo = styled.img`
  height: 60px;
  cursor: pointer;
  margin: 5px;
`
export const StyledTypography = styled(Typography).attrs({
  variant: 'h6',
  component: 'div'
})`
  flex-grow: 1;
  margin-left: 20px;
`