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
  Link,
} from "@chakra-ui/react"
import { FaDeezer, FaHeart } from "react-icons/fa"
import { secondsToMinutes } from "../../utils/secondsToMinutes"

const CardMusic = ({ musics, handleFav }) => {
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
                <Text
                  as={"span"}
                  fontSize={"1rem"}
                  fontFamily={"Roboto"}
                  noOfLines={1}
                  color='gray.500'
                >
                  {music.artist.name}
                </Text>
                <Text fontSize={".9rem"} fontFamily={"Roboto"} noOfLines={1}>
                  Album: {music.album.title}
                </Text>
                <Text
                  fontSize={".8rem"}
                  fontFamily={"Roboto"}
                  noOfLines={1}
                  color='gray.500'
                >
                  Duração: {secondsToMinutes(music.duration)}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <ButtonGroup justifyContent={"center"} spacing='5' mt={".5rem"}>
              <Tooltip label={"Adicionar aos favoritos"}>
                <Button
                  onClick={() => handleFav(music.id)}
                  variant='ghost'
                  colorScheme={"blue"}
                >
                  <FaHeart />
                </Button>
              </Tooltip>
              <Tooltip label={"Ouvir na Deezer"}>
                <Link href={music.link} isExternal>
                  <Button variant='ghost' colorScheme='blue'>
                    <FaDeezer />
                  </Button>
                </Link>
              </Tooltip>
            </ButtonGroup>
            <CardFooter mt='-4'>
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
