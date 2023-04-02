import Box from '@mui/material/Box'
import styled from 'styled-components'
import Paper from '@mui/material/Paper'

export const GoodsBox = styled(Box).attrs({
  sx: {
    '& > :not(style)': {
      m: 2,
      width: 350,
      height: 400,
    },
  },
})`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
`

export const GoodPaper = styled(Paper).attrs({
  elevation: 3,
})<{ mode?: string }>`
  ${p => p.mode === 'cart'
          ? {justifyContent: 'space-between', flexDirection: 'row'}
          : {justifyContent: 'normal', flexDirection: 'column'}
  };
  display: flex;
  align-items: center;
`

export const Price = styled.div`
  display: flex;
  flex-wrap: wrap;
`