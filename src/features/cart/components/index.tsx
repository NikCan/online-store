import {FC} from 'react'
import {OrderForm} from './order-form/OrderForm'
import {GoodsCard} from 'common/components'
import {GoodType} from 'features/goods/goodsSlice'
import {useCart} from 'features/cart/hooks/useCart'
import {FieldValues} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {PATH} from 'common/utils/constants/path'
import {sendOrder} from 'fire-base/API'
import {CartBox, CartContainer} from 'features/cart/style/cart-styles'

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
    <CartContainer>
      <CartBox>
        {list}
        <div>total: {sum} $</div>
      </CartBox>
      <OrderForm onSubmit={onSubmit}/>
    </CartContainer>
  )
}
