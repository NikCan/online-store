import {FC} from 'react'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import {GoodType} from 'features/goods/goodsSlice'
import {GoodPaper, Price} from '../../../features/goods/style/goods-styles'
import {Cover, CoverContainer, Title} from '../../../features/categories/style/categories-styles'

type Props = {
  cartMode?: boolean
  good: GoodType
  saveGoods: (good: GoodType) => void
  deleteGoods: (good: GoodType) => void
}

export const GoodsCard: FC<Props> = ({cartMode = false, good, saveGoods, deleteGoods}) => {
  return (
    <GoodPaper mode={cartMode ? 'cart' : undefined}>
      <CoverContainer><Cover src={good.image} alt="img"/></CoverContainer>
      <Title>{good.title}</Title>
      <Price>
        $ {good.price}{cartMode && <div>x{good.quantity || 1}</div>}
      </Price>
      <ButtonGroup size="small">
        <Button aria-label="reduce" onClick={() => deleteGoods(good)}>
          <RemoveIcon fontSize="small"/>
        </Button>
        <Button aria-label="increase" onClick={() => saveGoods(good)}>
          <AddIcon fontSize="small"/>
        </Button>
      </ButtonGroup>
    </GoodPaper>
  )
}