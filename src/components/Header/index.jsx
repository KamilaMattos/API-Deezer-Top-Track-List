import React from "react"
import { Link } from "react-router-dom"
import { FaHeart, FaHome } from "react-icons/fa"

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Link as LinkCh,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react"

import ColorThemeSwitcher from "../ColorThemeSwitcher"
import SearchInput from "../SearchInput"


const Header = ({ searchMusics, iconPage }) => {
  const headerBackGround = useColorModeValue("gray.50", "gray.900")
  const headerBorder = useColorModeValue("gray.200", "gray.700")

  return (
    <Box
      as='header'
      bg={headerBackGround}
      w='100%'
      p='3'
      padding='0.75rem'
      borderBottom='1px'
      borderColor={headerBorder}
    >
      <Flex as='nav'>
        <Flex w='150px' alignItems='center'>
          <LinkCh
            isExternal
            href='https://www.deezer.com/br'
            bgGradient='linear(to-l, #7928CA,#FF0080)'
            bgClip='text'
            fontSize={{ base: "1.2em", md: "1.3em" }}
            _hover=''
          >
            Deezer Music
          </LinkCh>
        </Flex>
        <Flex flex='1' justify='center'>
          <SearchInput searchMusics={searchMusics} />
          <ColorThemeSwitcher />
        </Flex>
        <Flex alignItems='center' mr={10}>
          <ButtonGroup>
            <Tooltip label={"Meus favoritos"}>
              <Link to='/favorites'>
                <Button variant='ghost' colorScheme={"blue"}>
                  <FaHeart />
                </Button>
              </Link>
            </Tooltip>
            <Tooltip label={"Home"}>
              <Link to='/'>
                <Button variant='ghost' colorScheme={"blue"}>
                  <FaHome />
                </Button>
              </Link>
            </Tooltip>
          </ButtonGroup>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header
