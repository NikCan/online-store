import {FC} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {PATH} from "../../utils/path";
import {Error404} from "../error404/Error404";
import {Cart} from "../cart/Cart";
import {HomePage} from "../home-page/HomePage";
import {ListOfGoods} from "../list-of-goods/ListOfGoods";
import {GoodType} from "../../../app/appSlice";

type Props = {
  saveGoods: (good: GoodType) => void
  goodsFromLS: GoodType[]
}

export const Pages: FC<Props> = ({saveGoods, goodsFromLS}) => {
  return (
    <Routes>
      <Route path={'/'} element={<Navigate to={PATH.HOME}/>}/>
      <Route path={PATH.HOME} element={<HomePage/>}/>
      <Route path={PATH.LIST} element={<ListOfGoods saveGoods={saveGoods}/>}/>
      <Route path={PATH.CART} element={<Cart goods={goodsFromLS}/>}/>
      <Route path={'*'} element={<Error404/>}/>
    </Routes>
  )
}