import styled from 'styled-components'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  height: 400px;
  width: 350px;
`

export const PrimaryButton = styled(Button).attrs({
  color: 'primary',
  variant: 'contained',
  type: 'submit',
})`
  padding: 8px;
  height: 56px;
`

export const CartContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 20px;
  min-height: 100vh;
`

export const CartBox = styled(Box).attrs({
  sx: {
    '& > :not(style)': {
      minWidth: 340,
      height: 70,
      m: 1,
      pr: 1,
    },
  },
})`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 53%;
  min-width: 350px;
`