import React, {FC} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {PATH} from "../../utils/constants/path";
import {Error404} from "../error404/Error404";
import {Cart} from "../../../features/cart/components";
import {Categories} from "../../../features/categories/components";
import {Goods} from "../../../features/goods/components";
import {GoodType} from "../../../features/goods/goodsSlice";
import {Loader} from "../loader/Loader";
import {useAppSelector} from "../../../hooks/useAppSelector";

type Props = {
    saveGoods: (good: GoodType) => void
    deleteGoods: (good: GoodType) => void
    goodsFromLS: GoodType[]
}

export const Pages: FC<Props> = ({saveGoods, goodsFromLS, deleteGoods}) => {
    const status = useAppSelector(state => state.app.status)

    if (status === 'loading') return <Loader/>
    return (
        <Routes>
            <Route path={'/'} element={<Navigate to={PATH.HOME}/>}/>
            <Route path={PATH.HOME} element={<Categories/>}/>
            <Route path={PATH.LIST} element={<Goods saveGoods={saveGoods} deleteGoods={deleteGoods}/>}/>
            <Route path={PATH.CART}
                   element={<Cart saveGoods={saveGoods} deleteGoods={deleteGoods} goods={goodsFromLS}/>}/>
            <Route path={'*'} element={<Error404/>}/>
        </Routes>
    )
}