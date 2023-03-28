import Paper from "@mui/material/Paper";
import {FC} from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../../firebase";

type Props = {
  saveGoods: (item: string) => void
}

export const ListOfGoods: FC<Props> = ({saveGoods}) => {
  const list = ['1', '2', '3']
    .map(el => <Paper key={el} elevation={3}>
      <Button onClick={() => saveGoods(el)}> save {el} </Button>
    </Paper>)

  const clickHandler = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "boots"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    } catch (e) {
      console.log(e)
    }
  }

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
      <button onClick={clickHandler}>+++</button>
    </Box>
  )
}