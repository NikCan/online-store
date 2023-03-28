import Paper from "@mui/material/Paper";
import {FC, useState} from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export const ListOfGoods: FC = () => {
  let goodsFromLS = JSON.parse(localStorage.getItem('goods') || JSON.stringify([]))
  const [goods, setGoods] = useState<string[]>(goodsFromLS)
  console.log(goods)
  const list = ['1', '2', '3'].map(el => {
    const clickHandler = () => {
      setGoods([...goods, el])
      localStorage.setItem('goods', JSON.stringify([...goods, el]))
    }
    return (
      <Paper key={el} elevation={3}>
        <Button onClick={clickHandler}> save {el} </Button>
      </Paper>
    )
  })

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