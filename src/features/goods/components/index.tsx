import {FC, useEffect} from 'react'
import {fetchGoods, GoodType, ProductType} from 'features/goods/goodsSlice'
import {useAppDispatch, useAppSelector} from 'common/hooks'
import {GoodsCard} from 'common/components'
import {useParams} from 'react-router-dom'
import {GoodsBox} from 'features/goods/style/goods-styles'

type Props = {
  saveGoods: (good: GoodType) => void
  deleteGoods: (good: GoodType) => void
}

export const Goods: FC<Props> = ({saveGoods, deleteGoods}) => {
  const dispatch = useAppDispatch()
  const {category} = useParams<{ category: string }>()
  const goods: GoodType[] = useAppSelector(state => state.goods[category as ProductType])
  const list = goods
    .map(el => <GoodsCard key={el.id} good={el} saveGoods={saveGoods} deleteGoods={deleteGoods}/>)

  useEffect(() => {
    if (category && !goods.length) {
      dispatch(fetchGoods(category))
    }
  }, [dispatch, category, goods.length])

  return (
    <GoodsBox>
      {list}
    </GoodsBox>
  )
}