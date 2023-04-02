import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit'
import {goodsReducer} from 'features/goods/goodsSlice'
import {categoriesReducer} from 'features/categories/categoriesSlice'
import {appReducer} from 'app/appSlice'

export const store = configureStore({
  reducer: {
    goods: goodsReducer,
    categories: categoriesReducer,
    app: appReducer,
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
