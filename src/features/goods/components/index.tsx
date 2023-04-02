import {FC, useEffect} from "react";
import Box from "@mui/material/Box";
import {fetchGoods, GoodType, ProductType} from "features/goods/goodsSlice";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {GoodsCard} from "../../../common/components/goods-card/GoodsCard";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../../hooks/useAppSelector";

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
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                minHeight: '100vh',
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