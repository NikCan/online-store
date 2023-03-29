import {useState} from "react";
import {GoodType} from "../app/appSlice";

export const useCart = () => {
  let goodsFromLS: GoodType[] = JSON.parse(localStorage.getItem('goods') || JSON.stringify([]))
  const [goods, setGoods] = useState<GoodType[]>(goodsFromLS)

  const saveGoods = (good: GoodType) => {
    if (goods.find(el => el.id === good.id)) {
      const newGoods = goods
        .map(el => el.id === good.id ? {...el, quantity: (el.quantity && el.quantity + 1)} : el)
      setGoods(newGoods)
      localStorage.setItem('goods', JSON.stringify(newGoods))
    } else {
      setGoods([...goods, {...good, quantity: 1}])
      localStorage.setItem('goods', JSON.stringify([...goods, {...good, quantity: 1}]))
    }
  }

  let quantity = 0
  goodsFromLS.forEach(el => {
    quantity = quantity + (el.quantity ? el.quantity : 1)
  })

  let sum = 0
  goodsFromLS.forEach(el => {
    sum = sum + el.price * (el.quantity ? el.quantity : 1)
  })

  return {goodsFromLS, saveGoods, quantity, sum}
}