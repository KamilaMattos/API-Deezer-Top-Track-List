import React from "react"
import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"

const ColorThemeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode()
  const colorTheme = useColorModeValue("dark", "light")
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <IconButton
      size='md'
      fontSize='lg'
      aria-label={`Switch to ${colorTheme} mode`}
      variant='ghost'
      color='current'
      marginLeft='2'
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  )
}

export default ColorThemeSwitcher
