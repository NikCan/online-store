import {FC, FormEvent} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

export const OrderForm: FC = () => {

  const fields = ['Name', 'Surname', 'Address', 'Phone']
    .map(el => <TextField
      key={el}
      required
      id={el}
      label={el}
    />)
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {m: 1, width: '35ch'},
      }}
      noValidate
      autoComplete="off"
      onSubmit={submitHandler}
    >
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
      }}>
        {fields}
        <Button
          style={{margin: '8px', height: '56px',}}
          variant="contained"
          type={'submit'}
        >ORDER</Button>
      </div>
    </Box>)
}