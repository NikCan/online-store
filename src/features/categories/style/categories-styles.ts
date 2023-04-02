import styled from 'styled-components'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

export const Title = styled.div`
  font-weight: bold;
  text-transform: uppercase;
`

export const CoverContainer = styled.div`
  height: 80%;
`

export const Cover = styled.img`
  height: 100%;
`

export const CategoriesBox = styled(Box).attrs({
  sx: {
    '& > :not(style)': {
      m: 2,
      width: 350,
      height: 400,
    }
  }
})`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
`

export const CategoryPaper = styled(Paper).attrs({
  elevation: 3,
})`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`