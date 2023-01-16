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
  Grid,
  GridItem,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react"
import { useCallback } from "react"
import { FaPlay, FaPause, FaDeezer, FaStar } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

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
        Top World
      </Text>
      <Grid
        mt={"2rem"}
        marginBottom={"2rem"}
        marginLeft={"11rem"}
        width={[300, 400, 500]}
        templateColumns={"repeat(4, 1fr)"}
        gap={10}
      >
        {musics.map((music) => (
          <GridItem key={music.id} w='100%'>
            <Card maxW='2xs'>
              <CardBody>
                <Image
                  src={music.album.cover_medium}
                  alt={music.title}
                  borderRadius='lg'
                />
                <Stack mt='5' spacing='2'>
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
              <CardFooter>
                <audio controls>
                  <source src={music.preview} type='audio/ogg' />
                  <source src={music.preview} type='audio/mpeg' />
                  Your browser does not support the audio element.
                </audio>
                {/* <ButtonGroup justifyContent={"center"} spacing='2'>
                  <Tooltip label={"Ouvir prévia"}>
                    <Button variant='ghost' colorScheme='blue'>
                      <FaPlay />
                    </Button>
                  </Tooltip>

                  <Tooltip label={"Pausar"}>
                    <Button variant='ghost' colorScheme='blue'>
                      <FaPause />
                    </Button>
                  </Tooltip>

                  <Tooltip label={"Ouvir na Deezer"}>
                    <Button variant='ghost' colorScheme='blue'>
                      <FaDeezer />
                    </Button>
                  </Tooltip>

                  <Tooltip label={"Adicionar aos favoritos"}>
                    <Button variant='ghost' colorScheme='blue'>
                      <FaStar />
                    </Button>
                  </Tooltip>
                </ButtonGroup> */}
              </CardFooter>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </>
  )
}

export default CardMusic
