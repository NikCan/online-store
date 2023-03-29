import {FC, useEffect} from "react";
import Box from "@mui/material/Box";
import {fetchGoods, GoodType} from "app/appSlice";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {GoodsCard} from "../goods-card/GoodsCard";
import {useParams} from "react-router-dom";
import {ProductType} from "../../constants/product-categories";

type Props = {
  saveGoods: (good: GoodType) => void
}

export const ListOfGoods: FC<Props> = ({saveGoods}) => {
  const dispatch = useAppDispatch()
  const {category} = useParams<{ category: string }>()
  const goods: GoodType[] = useAppSelector(state => state.app[category as ProductType])
  const list = goods
    .map(el => <GoodsCard key={el.id} good={el} saveGoods={saveGoods}/>)

  useEffect(() => {
    if (category && !goods.length) {
      dispatch(fetchGoods(category))
    }
  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 2,
          width: 350,
          height: 400,
        },
      }}
    >
      {list}
    </Box>
  )
}