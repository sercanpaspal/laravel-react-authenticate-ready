import React from 'react'
import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react'

const FormField = ({ field }) => (
  <FormControl id={field.name} mt={4} isInvalid={field.isInvalid}>
    <FormLabel>{field.label}</FormLabel>
    <Input {...field} type={field.type} />
    <FormErrorMessage>{field.error}</FormErrorMessage>
    {field.helperText && (
      <FormHelperText>
        {field.helperText || "We'll never share your email."}
      </FormHelperText>
    )}
  </FormControl>
)

export default FormField
