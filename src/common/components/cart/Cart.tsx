import {FC} from "react";
import Box from '@mui/material/Box';
import {OrderForm} from "../order-form/OrderForm";
import {GoodsCard} from "../goods-card/GoodsCard";
import {GoodType} from "app/appSlice";
import {useCart} from "hooks/useCart";

type Props = {
  goods: GoodType[]
}

export const Cart: FC<Props> = ({goods}) => {
  const {sum} = useCart()
  const list = goods
    .map(el => <GoodsCard key={el.id} cartMode={true} good={el}/>)

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
            height: 70,
          },
        }}
      >
        {list}
        <div>total: {sum} $</div>
      </Box>
      <OrderForm/>
    </div>
  )
}
