import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ProductType} from "../common/constants/product-categories";

export const fetchGoods = createAsyncThunk<{ goods: Array<GoodType>, type: string }, string>(
  'app/fetchGoods',
  async (type, thunkAPI) => {
    try {
      const querySnapshot = await getDocs(collection(db, type))
      let goods = [] as GoodType[]
      querySnapshot.forEach((doc) => {
        goods.push({id: doc.id, ...doc.data()} as GoodType)
      })
      return {goods, type}
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  })

const InitialState: InitialStateType = {
  boots: [],
  clothing: [],
  exhausts: [],
  gloves: [],
  helmets: [],
}

const slice = createSlice({
  name: 'app',
  initialState: InitialState,
  reducers: {},
  extraReducers: builder => builder
    .addCase(fetchGoods.fulfilled, (state, action) => {
      state[action.payload.type as ProductType] = [...action.payload.goods]
    })
})
export const {reducer: appReducer, actions: appActions} = slice

export type GoodType = {
  id: string
  image: string
  title: string
  price: number
  quantity?: number
}
type InitialStateType = {
  [key in ProductType]: GoodType[];
};