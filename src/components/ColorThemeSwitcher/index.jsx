import {
  useColorMode,
  useColorModeValue,
  IconButton,
  Tooltip,
} from "@chakra-ui/react"

import { FaMoon, FaSun } from "react-icons/fa"

const ColorThemeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode()
  const colorTheme = useColorModeValue("dark", "light")
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <Tooltip label={"Mudar cor do tema"}>
      <IconButton
        size='md'
        fontSize='lg'
        aria-label={`Switch to ${colorTheme} mode`}
        variant='ghost'
        color='current'
        marginLeft='2'
        onClick={toggleColorMode}
        icon={<SwitchIcon color='#90cdf4' size={20} />}
        {...props}
      />
    </Tooltip>
  )
}

export default ColorThemeSwitcher
