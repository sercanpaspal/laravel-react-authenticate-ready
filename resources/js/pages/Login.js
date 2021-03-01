import React from 'react'
import {
  useToast,
  Container,
  Heading,
  Box,
  Text,
  Button,
} from '@chakra-ui/react'
import Form from '../components/Form'
import agent from '../agent'
import { Link as RouterLink } from 'react-router-dom'
import { useStore, LOGIN } from '../store'

const LoginPage = (props) => {
  const toast = useToast()
  const [state, dispatch] = useStore()

  const onSubmit = (data, { setSubmitting, setErrors }) => {
    agent.Auth.login(data)
      .then((response) => {
        dispatch({ type: LOGIN, payload: response })
      })
      .catch(({ message, errors }) => {
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
    { name: 'email', label: 'Email address', type: 'email', value: '' },
    { name: 'password', label: 'Password', type: 'password', value: '' },
  ]

  return (
    <Container>
      <Box maxW="3xl" p="6">
        <Heading>Login</Heading>
        <Text fontSize="lg">
          Don't you have account yet?{' '}
          <Button
            colorScheme="orange"
            variant="link"
            as={RouterLink}
            to="/register"
          >
            Register
          </Button>{' '}
          then.
        </Text>
        <Form onSubmit={onSubmit} fields={fields} submitButtonText="Login" />
      </Box>
    </Container>
  )
}

export default LoginPage
