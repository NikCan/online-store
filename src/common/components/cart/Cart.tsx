import {FC} from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {OrderForm} from "../order-form/OrderForm";

export const Cart: FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      paddingTop: '20px',
    }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          '& > :not(style)': {
            m: 1,
            width: 350,
            height: 100,
          },
        }}
      >
        <Paper/>
        <Paper/>
        <Paper/>
      </Box>
      <OrderForm/>
    </div>
  )
}
