import {useState} from "react";

export const useLocalStorage = () => {
  let goodsFromLS = JSON.parse(localStorage.getItem('goods') || JSON.stringify([]))
  const [goods, setGoods] = useState<string[]>(goodsFromLS)

  const saveGoods = (item: string) => {
    setGoods([...goods, item])
    localStorage.setItem('goods', JSON.stringify([...goods, item]))
  }

  return {goodsFromLS, saveGoods}
}