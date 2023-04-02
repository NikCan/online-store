import {FC} from 'react'
import {useNavigate} from 'react-router-dom'
import {CategoryType} from '../../categoriesSlice'
import {CategoryPaper, Cover, CoverContainer, Title} from 'features/categories/style/categories-styles'
import {PATH} from 'common/utils/constants/path'

type Props = {
  category: CategoryType
}

export const Category: FC<Props> = ({category}) => {
  const navigate = useNavigate()
  const clickHandler = () => navigate(PATH.HOME + category.title)

  return (
    <CategoryPaper onClick={clickHandler}>
      <Title>{category.title}</Title>
      <CoverContainer><Cover src={category.cover} alt="cover"/></CoverContainer>
    </CategoryPaper>
  )
}