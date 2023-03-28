import {FC, forwardRef, SyntheticEvent, useState} from "react";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import MuiAlert, {AlertProps} from '@mui/material/Alert';

export const NotificationBar: FC = () => {
  const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  })

  const [open, setOpen] = useState(false)
  const handleClick = () => setOpen(true)

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <Stack spacing={2} sx={{width: '100%'}}>
      <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
          The item has been successfully added to your cart!
        </Alert>
      </Snackbar>
    </Stack>
  )
}