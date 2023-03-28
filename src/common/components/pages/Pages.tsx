import {FC} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {PATH} from "../../utils/path";
import {Vegetables} from "../vegetables/Vegetables";
import {Error404} from "../error404/Error404";
import {Cart} from "../cart/Cart";
import {HomePage} from "../home-page/HomePage";
import {ListOfGoods} from "../list-of-goods/ListOfGoods";

export const Pages: FC = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Navigate to={PATH.HOME}/>}/>
      <Route path={PATH.HOME} element={<HomePage/>}/>
      <Route path={PATH.LIST} element={<ListOfGoods/>}/>
      <Route path={PATH.VEGETABLES} element={<Vegetables/>}/>
      <Route path={PATH.CART} element={<Cart/>}/>
      <Route path={'*'} element={<Error404/>}/>
    </Routes>
  )
}