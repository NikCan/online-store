import {FC} from 'react'
import Box from '@mui/material/Box'
import {OrderForm} from './order-form/OrderForm'
import {GoodsCard} from 'common/components'
import {GoodType} from 'features/goods/goodsSlice'
import {useCart} from 'features/cart/hooks/useCart'
import {FieldValues} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {PATH} from 'common/utils/constants/path'
import {sendOrder} from 'fire/API'

type Props = {
  goods: GoodType[]
  saveGoods: (good: GoodType) => void
  deleteGoods: (good: GoodType) => void
  clearCart: () => void
}

export const Cart: FC<Props> = ({goods, saveGoods, deleteGoods, clearCart}) => {
  const {sum} = useCart()
  const navigate = useNavigate()

  const list = goods
    .map(el => <GoodsCard key={el.id} saveGoods={saveGoods} deleteGoods={deleteGoods} cartMode={true} good={el}/>)

  const onSubmit = async (data: FieldValues) => {
    const goodsAPI = goods.map(el => ({
      id: el.id,
      title: el.title,
      price: el.price,
      quantity: el.quantity
    }))
    await sendOrder('orders', data, goodsAPI)
    clearCart()
    navigate(PATH.HOME)
  }

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      paddingTop: '20px',
      minHeight: '100vh'
    }}>
      <Box
        style={{width: '53%', minWidth: '350px'}}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          '& > :not(style)': {
            minWidth: 340,
            height: 70,
            m: 1,
            pr: 1,
          },
        }}
      >
        {list}
        <div>total: {sum} $</div>
      </Box>
      <OrderForm onSubmit={onSubmit}/>
    </div>
  )
}
