import {FC} from 'react'
import TextField from '@mui/material/TextField'
import {FieldValues, useForm} from 'react-hook-form'
import {Form, PrimaryButton} from 'features/cart/style/cart-styles'

type Props = {
  onSubmit: (data: FieldValues) => void
}
export const OrderForm: FC<Props> = ({onSubmit}) => {
  const {
    register,
    handleSubmit, reset,
    formState: {errors, isValid, isSubmitSuccessful}
  } = useForm({
    mode: 'onBlur'
  })
  isSubmitSuccessful && reset()

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextField error={!!errors?.firstName?.message}
                 helperText={errors?.firstName?.message as string}
                 label="First name"
                 {...register('firstName', {
                   required: 'this field is required',
                   maxLength: {
                     value: 20,
                     message: 'maximum field length 20 characters'
                   }
                 })} />
      <TextField error={!!errors?.lastName?.message}
                 helperText={errors?.lastName?.message as string}
                 label="Last name"
                 {...register('lastName', {
                   required: 'this field is required',
                   maxLength: {
                     value: 20,
                     message: 'maximum field length 20 characters'
                   }
                 })} />
      <TextField error={!!errors?.address?.message}
                 helperText={errors?.address?.message as string}
                 label="Address"
                 {...register('address', {
                   required: 'this field is required',
                   maxLength: {
                     value: 50,
                     message: 'maximum field length 50 characters'
                   }
                 })} />
      <TextField error={!!errors?.phone?.message}
                 helperText={errors?.phone?.message as string}
                 type="tel"
                 label="Phone"
                 {...register('phone', {
                   required: 'this field is required',
                   minLength: {
                     value: 10,
                     message: 'minimum field length 10 characters'
                   },
                   maxLength: {
                     value: 15,
                     message: 'maximum field length 15 characters'
                   }
                 })} />
      <PrimaryButton disabled={!isValid}>ORDER</PrimaryButton>
    </Form>
  )
}
