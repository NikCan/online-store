import {addDoc, collection, doc, setDoc} from "firebase/firestore";
import {db} from "./firebase";
import {FieldValues} from "react-hook-form";

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