import {FC} from "react";
import Box from '@mui/material/Box';
import {OrderForm} from "./order-form/OrderForm";
import {GoodsCard} from "../../../common/components/goods-card/GoodsCard";
import {GoodType} from "features/goods/goodsSlice";
import {useCart} from "features/cart/hooks/useCart";

type Props = {
    goods: GoodType[]
    saveGoods: (good: GoodType) => void
    deleteGoods: (good: GoodType) => void
}

export const Cart: FC<Props> = ({goods, saveGoods, deleteGoods}) => {
    const {sum} = useCart()
    const list = goods
        .map(el => <GoodsCard key={el.id} saveGoods={saveGoods} deleteGoods={deleteGoods} cartMode={true} good={el}/>)

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
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
