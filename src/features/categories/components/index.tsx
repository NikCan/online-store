import {FC, useEffect} from 'react'
import {Category} from './category/Category'
import {useAppDispatch, useAppSelector} from 'common/hooks'
import {fetchCategories} from '../categoriesSlice'
import {CategoriesBox} from 'features/categories/style/categories-styles'

export const Categories: FC = () => {
  const dispatch = useAppDispatch()
  const categories = useAppSelector(state => state.categories)

  const list = categories
    .map(el => <Category key={el.id} category={el}/>)

  useEffect(() => {
    if (!categories.length) {
      dispatch(fetchCategories())
    }
  }, [dispatch, categories.length])

  return (
    <CategoriesBox>
      {list}
    </CategoriesBox>
  )
}