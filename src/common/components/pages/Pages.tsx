import React, {FC} from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import {PATH} from 'common/utils/constants/path'
import {Error404, Loader} from 'common/components'
import {Cart, Categories, Goods} from 'features'
import {GoodType} from 'features/goods/goodsSlice'
import {useAppSelector} from 'common/hooks/useAppSelector'

type Props = {
  saveGoods: (good: GoodType) => void
  deleteGoods: (good: GoodType) => void
  clearCart: () => void
  goodsFromLS: GoodType[]
}

export const Pages: FC<Props> = ({saveGoods, goodsFromLS, deleteGoods, clearCart}) => {
  const status = useAppSelector(state => state.app.status)

  if (status === 'loading') return <Loader/>
  return (
    <Routes>
      <Route path={'/'} element={<Navigate to={PATH.HOME}/>}/>
      <Route path={PATH.HOME} element={<Categories/>}/>
      <Route path={PATH.LIST} element={<Goods saveGoods={saveGoods} deleteGoods={deleteGoods}/>}/>
      <Route path={PATH.CART}
             element={<Cart saveGoods={saveGoods} deleteGoods={deleteGoods} clearCart={clearCart}
                            goods={goodsFromLS}/>}/>
      <Route path={'*'} element={<Error404/>}/>
    </Routes>
  )
}