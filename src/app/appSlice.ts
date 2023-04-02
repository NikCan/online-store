import {createSlice, isAnyOf} from '@reduxjs/toolkit'
import {fetchCategories} from 'features/categories/categoriesSlice'
import {fetchGoods} from 'features/goods/goodsSlice'

const slice = createSlice({
  name: 'app',
  initialState: {
    status: 'idle' as StatusType,
  },
  reducers: {},
  extraReducers: builder => builder
    .addMatcher(isAnyOf(fetchCategories.fulfilled, fetchGoods.fulfilled), (state) => {
      state.status = 'succeeded'
    })
    .addMatcher(isAnyOf(fetchCategories.pending, fetchGoods.pending), (state) => {
      state.status = 'loading'
    })
    .addMatcher(isAnyOf(fetchCategories.rejected, fetchGoods.rejected), (state) => {
      state.status = 'failed'
    })
})

export const {reducer: appReducer, actions: appActions} = slice
type StatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

