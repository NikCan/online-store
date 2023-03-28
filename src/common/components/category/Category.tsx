import {FC} from "react";
import Paper from "@mui/material/Paper";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../utils/path";

type Props = {
  title: string
}

export const Category: FC<Props> = ({title}) => {
  const navigate = useNavigate()
  const clickHandler = () => {
    navigate(PATH.LIST)
  }
  return (
    <Paper style={{cursor: 'pointer'}} onClick={clickHandler} elevation={3}>{title}</Paper>
  )
}