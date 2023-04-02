import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {ProductType} from '../goods/goodsSlice'
import {getCategories} from 'fire/API'

export const fetchCategories = createAsyncThunk<CategoryType[], undefined>(
  'categories/fetchCategories',
  async (param, thunkAPI) => {
    try {
      return getCategories()
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  })

const slice = createSlice({
  name: 'categories',
  initialState: [] as CategoryType[],
  reducers: {},
  extraReducers: builder => builder
    .addCase(fetchCategories.fulfilled, (state, action) => {
      return action.payload
    })
})

export const {reducer: categoriesReducer, actions: categoriesActions} = slice

export type CategoryType = {
  id: string
  cover: string
  title: ProductType
}
