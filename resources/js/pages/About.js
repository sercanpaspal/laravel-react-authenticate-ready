import React from 'react'
import { Container, Box, Heading } from '@chakra-ui/react'

const AboutPage = () => {
  return (
    <Container maxW="container.lg" mt="4">
      <Heading>About</Heading>
      <Box
        padding="4"
        bg="gray.50"
        borderRadius="lg"
        border="1px"
        mt="2"
        borderColor="gray.200"
      >
        About page
      </Box>
    </Container>
  )
}

export default AboutPage
