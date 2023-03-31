import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase/firebase";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {ProductType} from "../goods/goodsSlice";

export const fetchCategories = createAsyncThunk<CategoryType[], undefined>(
  'categories/fetchCategories',
  async (param, thunkAPI) => {
    try {
      const querySnapshot = await getDocs(collection(db, 'categories'))
      let categories = [] as CategoryType[]
      querySnapshot.forEach((doc) => {
        categories.push({id: doc.id, ...doc.data()} as CategoryType)
      })
      return categories
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
