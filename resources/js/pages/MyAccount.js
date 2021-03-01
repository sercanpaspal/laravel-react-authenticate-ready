import React from 'react'
import { Container, Box, Heading, Text } from '@chakra-ui/react'
import { useStore } from '../store'

const MyAccountPage = () => {
  const [state] = useStore()

  const user = state.user

  return (
    <Container>
      <Box maxW="3xl" p="6">
        {user ? (
          <>
            <Heading>{user.name}</Heading>
            <Text fontSize="lg">{user.email}</Text>
          </>
        ) : (
          <Heading>404, Account not found!</Heading>
        )}
      </Box>
    </Container>
  )
}

export default MyAccountPage
