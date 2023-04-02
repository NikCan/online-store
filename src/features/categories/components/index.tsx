import {FC, useEffect} from 'react'
import {Category} from './category/Category'
import Box from '@mui/material/Box'
import {useAppDispatch, useAppSelector} from 'common/hooks'
import {fetchCategories} from '../categoriesSlice'

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
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        minHeight: '100vh',
        '& > :not(style)': {
          m: 2,
          width: 350,
          height: 400,
        },
      }}
    >
      {list}
    </Box>
  )
}