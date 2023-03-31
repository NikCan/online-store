import {useState} from "react";
import {GoodType} from "../../goods/goodsSlice";

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
            const newGoods = [...goods, {...good, quantity: 1}]
            setGoods(newGoods)
            localStorage.setItem('goods', JSON.stringify(newGoods))
        }
    }

    const deleteGoods = (good: GoodType) => {
        if (goods.find(el => el.id === good.id)?.quantity !== 1) {
            const newGoods = goods
                .map(el => el.id === good.id ? {...el, quantity: (el.quantity && el.quantity - 1)} : el)
            setGoods(newGoods)
            localStorage.setItem('goods', JSON.stringify(newGoods))
        } else {
            const newGoods = goods
                .filter(el => el.id !== good.id)
            setGoods(newGoods)
            localStorage.setItem('goods', JSON.stringify(newGoods))
        }
    }

    let quantity = 0
    goodsFromLS.forEach(el => quantity += (el.quantity ? el.quantity : 1))

    let sum = 0
    goodsFromLS.forEach(el => sum += el.price * (el.quantity ? el.quantity : 1))

    return {goodsFromLS, saveGoods, deleteGoods, quantity, sum}
}