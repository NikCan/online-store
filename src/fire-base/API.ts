import {addDoc, collection, doc, getDocs, setDoc} from "firebase/firestore";
import {db} from "./firebase";
import {FieldValues} from "react-hook-form";
import {CategoryType} from "../features/categories/categoriesSlice";
import {GoodType} from "../features/goods/goodsSlice";

export const getCategories = async () => {
    const querySnapshot = await getDocs(collection(db, 'categories'))
    let categories = [] as CategoryType[]
    querySnapshot.forEach((doc) => {
        categories.push({id: doc.id, ...doc.data()} as CategoryType)
    })
    return categories
}

export const getGoods = async (type: string) => {
    const querySnapshot = await getDocs(collection(db, type))
    let goods = [] as GoodType[]
    querySnapshot.forEach((doc) => {
        goods.push({id: doc.id, ...doc.data()} as GoodType)
    })
    return goods
}

export const sendOrder = async (collectName: string, data: FieldValues, goods: GoodAPIType[]) => {
    const docRef = await addDoc(collection(db, collectName), {})
    await setDoc(doc(db, collectName, docRef.id), {
        info: goods,
        personalData: data
    })
}

export type GoodAPIType = {
    id: string
    title: string
    price: number
    quantity?: number
}