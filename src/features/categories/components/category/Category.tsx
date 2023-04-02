import {FC} from 'react'
import Paper from '@mui/material/Paper'
import {useNavigate} from 'react-router-dom'
import {CategoryType} from '../../categoriesSlice'

type Props = {
  category: CategoryType
}

export const Category: FC<Props> = ({category}) => {
  const navigate = useNavigate()
  const clickHandler = () => navigate('/' + category.title)

  return (
    <Paper style={{cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center'}}
           onClick={clickHandler} elevation={3}>
      <div style={{fontWeight: 'bold', textTransform: 'uppercase'}}>{category.title}</div>
      <div style={{height: '90%'}}><img style={{height: '100%'}} src={category.cover} alt="cover"/></div>
    </Paper>
  )
}