import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getGoods} from 'fire/API'

export const fetchGoods = createAsyncThunk<{ goods: Array<GoodType>, type: string }, string>(
  'goods/fetchGoods',
  async (type, thunkAPI) => {
    try {
      const goods = await getGoods(type)
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
  name: 'goods',
  initialState: InitialState,
  reducers: {},
  extraReducers: builder => builder
    .addCase(fetchGoods.fulfilled, (state, action) => {
      state[action.payload.type as ProductType] = [...action.payload.goods]
    })
})
export const {reducer: goodsReducer, actions: goodsActions} = slice

export type ProductType = 'clothing' | 'exhausts' | 'gloves' | 'helmets' | 'boots'
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