import {FC} from "react"
import {Category} from "../category/Category";
import Box from "@mui/material/Box";
import {productCategories} from "../../constants/product-categories";

export const HomePage: FC = () => {
  const list = productCategories.map(el => <Category key={el} title={el}/>)

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
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