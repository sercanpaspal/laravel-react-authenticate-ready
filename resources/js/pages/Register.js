import React from 'react'
import {
  useToast,
  Container,
  Heading,
  Box,
  Button,
  Text,
} from '@chakra-ui/react'
import agent from '../agent'
import Form from '../components/Form'
import { Link as RouterLink } from 'react-router-dom'
import { useStore, LOGIN } from '../store'

const RegisterPage = () => {
  const toast = useToast()
  const [state, dispatch] = useStore()

  const onSubmit = (data, { setSubmitting, setErrors }) => {
    agent.Auth.register(data)
      .then(function (response) {
        toast({
          title: 'Success!',
          description: 'Account created!',
          status: 'success',
          duration: 9000,
          isClosable: true,
        })

        dispatch({ type: LOGIN, payload: response })
      })
      .catch(function ({ message, errors = null }) {
        if (errors) {
          setErrors(errors)
        } else if (message) {
          toast({
            title: 'Error!',
            description: message,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
        }
      })
      .then(() => setSubmitting(false))
  }

  const fields = [
    { name: 'name', label: 'Name', type: 'text', value: '' },
    { name: 'email', label: 'Email address', type: 'email', value: '' },
    { name: 'password', label: 'Password', type: 'password', value: '' },
    {
      name: 'password_confirmation',
      label: 'Password confirmation',
      type: 'password',
      value: '',
    },
  ]

  return (
    <Container>
      <Box maxW="3xl" p="6">
        <Heading>Register</Heading>
        <Text fontSize="lg">
          Do you have already account?{' '}
          <Button
            colorScheme="orange"
            variant="link"
            as={RouterLink}
            to="/login"
          >
            Login
          </Button>{' '}
          then.
        </Text>
        <Form onSubmit={onSubmit} fields={fields} submitButtonText="Register" />
      </Box>
    </Container>
  )
}

export default RegisterPage
