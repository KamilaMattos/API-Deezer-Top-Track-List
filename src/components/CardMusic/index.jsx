import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react"
import { useCallback } from "react"
import { FaPlay, FaPause, FaDeezer, FaStar } from "react-icons/fa"

const CardMusic = ({ musics }) => {
  const secondsToMinutes = (seconds) => {
    return (
      (seconds - (seconds %= 60)) / 60 + (9 < seconds ? ":" : ":0") + seconds
    )
  }
  return (
    <>
      <Text
        as='h1'
        fontFamily={"Roboto"}
        textAlign={"center"}
        mt={"2rem"}
        fontSize={"3xl"}
        colorScheme={"blue"}
      >
        Top Brazil
      </Text>
      <Flex
        mt={"2rem"}
        flexDir={"row"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        gap={10}
      >
        {musics.map((music) => (
          <Card key={music.id} maxW='2xs'>
            <CardBody>
              <Image
                src={music.album.cover_medium}
                alt={music.title}
                borderRadius='lg'
              />
              <Stack mt='2' spacing='1'>
                <Heading
                  color='blue.600'
                  size='md'
                  fontFamily={"Roboto"}
                  noOfLines={1}
                >
                  {music.title}
                </Heading>
                <Text fontSize={".8rem"} fontFamily={"Roboto"} noOfLines={1}>
                  {music.artist.name}
                </Text>
                <Text fontSize={".8rem"} fontFamily={"Roboto"} noOfLines={1}>
                  Album: {music.album.title}
                </Text>
                <Text fontSize={".8rem"} fontFamily={"Roboto"} noOfLines={1}>
                  Duração: {secondsToMinutes(music.duration)}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <ButtonGroup justifyContent={"center"} spacing='2'>
              <Tooltip label={"Adicionar aos favoritos"}>
                <Button variant='ghost' colorScheme='blue'>
                  <FaStar />
                </Button>
              </Tooltip>
              <Tooltip label={"Ouvir na Deezer"}>
                <Button variant='ghost' colorScheme='blue'>
                  <FaDeezer />
                </Button>
              </Tooltip>
            </ButtonGroup>
            <CardFooter>
              <audio controls>
                <source src={music.preview} type='audio/ogg' />
                <source src={music.preview} type='audio/mpeg' />
              </audio>
            </CardFooter>
          </Card>
        ))}
      </Flex>
    </>
  )
}

export default CardMusic
