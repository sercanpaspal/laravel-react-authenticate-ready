import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  ButtonGroup,
  MenuGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react'
import { useStore, LOGOUT } from '../store'
import LinkButton from '../components/LinkButton'

const DefaultLayout = ({ children }) => {
  const [show, setShow] = useState(false)
  const [{ user }, dispatch] = useStore()

  return (
    <div>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1.5rem"
        bg="gray.100"
        color="dark"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg">
            <Link to="/">Lareact</Link>
          </Heading>
        </Flex>

        <Box
          display={{ base: 'block', md: 'none' }}
          onClick={() => setShow((s) => !s)}
        >
          <svg
            fill="black"
            width="12px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>

        <Box
          display={{ sm: show ? 'block' : 'none', md: 'flex' }}
          width={{ sm: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
        >
          <ButtonGroup>
            <LinkButton
              to="/"
              size="sm"
              colorScheme="blackAlpha"
              variant="ghost"
            >
              Home
            </LinkButton>
            <LinkButton
              to="/about"
              size="sm"
              colorScheme="blackAlpha"
              variant="ghost"
            >
              About
            </LinkButton>
          </ButtonGroup>
        </Box>

        <Box
          display={{ sm: show ? 'block' : 'none', md: 'block' }}
          mt={{ base: 4, md: 0 }}
        >
          {user ? (
            <Flex alignItems="center">
              <Text mr="4" fontSize="md">
                Welcome,
              </Text>
              <Menu>
                <MenuButton as={Button} colorScheme="orange">
                  {user.name}
                </MenuButton>
                <MenuList>
                  <MenuGroup title="Profile">
                    <MenuItem as={Link} to="/my-account">
                      My Account
                    </MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuItem onClick={() => dispatch({ type: LOGOUT })}>
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          ) : (
            <ButtonGroup>
              <LinkButton to="/login" colorScheme="orange" variant="ghost">
                Login
              </LinkButton>
              <LinkButton to="/register" colorScheme="orange" variant="outline">
                Register
              </LinkButton>
            </ButtonGroup>
          )}
        </Box>
      </Flex>
      {children}
    </div>
  )
}

export default DefaultLayout
