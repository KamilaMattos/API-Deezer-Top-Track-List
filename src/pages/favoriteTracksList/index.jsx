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
import { FaDeezer, FaTrash } from "react-icons/fa"

import Header from "../../components/Header"

import { secondsToMinutes } from "../../utils/secondsToMinutes"

const FavoriteTracksList = ({ favList, handleDeleteFav }) => {
  return (
    <>
      <Header />
      <Text
        as='h1'
        fontFamily={"Roboto"}
        textAlign={"center"}
        mt={"2rem"}
        fontSize={"3xl"}
        colorScheme={"blue"}
      >
        Minhas Favoritas
      </Text>
      <Flex
        mt={"2rem"}
        flexDir={"row"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        gap={10}
      >
        {favList.length > 0 ? (
          favList.map((fav) => (
            <Card key={fav.id} maxW='2xs'>
              <CardBody>
                <Image
                  src={fav.album.cover_medium}
                  alt={fav.title}
                  borderRadius='lg'
                />
                <Stack mt='2' spacing='1'>
                  <Heading
                    color='blue.600'
                    size='md'
                    fontFamily={"Roboto"}
                    noOfLines={1}
                  >
                    {fav.title}
                  </Heading>
                  <Text
                    as={"span"}
                    fontSize={"1rem"}
                    fontFamily={"Roboto"}
                    noOfLines={1}
                    color='gray.500'
                  >
                    {fav.artist.name}
                  </Text>
                  <Text fontSize={".9rem"} fontFamily={"Roboto"} noOfLines={1}>
                    Album: {fav.album.title}
                  </Text>
                  <Text
                    fontSize={".8rem"}
                    fontFamily={"Roboto"}
                    noOfLines={1}
                    color='gray.500'
                  >
                    Duração: {secondsToMinutes(fav.duration)}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <ButtonGroup justifyContent={"center"} spacing='5' mt={".5rem"}>
                <Tooltip label={"Remover dos favoritos"}>
                  <Button
                    onClick={() => handleDeleteFav(fav.id)}
                    variant='ghost'
                    colorScheme={"blue"}
                  >
                    <FaTrash />
                  </Button>
                </Tooltip>
                <Tooltip label={"Ouvir na Deezer"}>
                  <Link href={fav.link} isExternal>
                    <Button variant='ghost' colorScheme='blue'>
                      <FaDeezer />
                    </Button>
                  </Link>
                </Tooltip>
              </ButtonGroup>
              <CardFooter mt='-4'>
                <audio controls>
                  <source src={fav.preview} type='audio/ogg' />
                  <source src={fav.preview} type='audio/mpeg' />
                </audio>
              </CardFooter>
            </Card>
          ))
        ) : (
          <Text as={"p"}>Você ainda não tem favoritos!</Text>
        )}
      </Flex>
    </>
  )
}

export default FavoriteTracksList
