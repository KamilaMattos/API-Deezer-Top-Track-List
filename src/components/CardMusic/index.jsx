import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react"
import { FaPlay, FaPause, FaDeezer, FaStar } from "react-icons/fa"

const CardMusic = () => {
  const musics = [
    {
      id: 2056080287,
      title: "Leão",
      title_short: "Leão",
      title_version: "",
      link: "https://www.deezer.com/track/2056080287",
      duration: 166,
      rank: 998389,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 0,
      preview:
        "https://cdns-preview-4.dzcdn.net/stream/c-487b96fff3099737ade4680a27e0ec24-3.mp3",
      md5_image: "1bcbdca83ec8a5abbf5daaf6489bf994",
      position: 1,
      artist: {
        id: 7068771,
        name: "Marília Mendonça",
        link: "https://www.deezer.com/artist/7068771",
        picture: "https://api.deezer.com/artist/7068771/image",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/artist/5ad111b990fb42b2f433ecec4d3c6866/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://e-cdns-images.dzcdn.net/images/artist/5ad111b990fb42b2f433ecec4d3c6866/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://e-cdns-images.dzcdn.net/images/artist/5ad111b990fb42b2f433ecec4d3c6866/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://e-cdns-images.dzcdn.net/images/artist/5ad111b990fb42b2f433ecec4d3c6866/1000x1000-000000-80-0-0.jpg",
        radio: true,
        tracklist: "https://api.deezer.com/artist/7068771/top?limit=50",
        type: "artist",
      },
      album: {
        id: 383846627,
        title: "Decretos Reais, Vol. 2",
        cover: "https://api.deezer.com/album/383846627/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/1bcbdca83ec8a5abbf5daaf6489bf994/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/1bcbdca83ec8a5abbf5daaf6489bf994/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/1bcbdca83ec8a5abbf5daaf6489bf994/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/1bcbdca83ec8a5abbf5daaf6489bf994/1000x1000-000000-80-0-0.jpg",
        md5_image: "1bcbdca83ec8a5abbf5daaf6489bf994",
        tracklist: "https://api.deezer.com/album/383846627/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 1978300657,
      title: "Bombonzinho (Ao Vivo)",
      title_short: "Bombonzinho",
      title_version: "(Ao Vivo)",
      link: "https://www.deezer.com/track/1978300657",
      duration: 154,
      rank: 982009,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 0,
      preview:
        "https://cdns-preview-4.dzcdn.net/stream/c-40ebdac60411ad18babccafae7d31a64-3.mp3",
      md5_image: "b8302df0a96470ee5aadecc92e76ff68",
      position: 2,
      artist: {
        id: 5200697,
        name: "Israel & Rodolffo",
        link: "https://www.deezer.com/artist/5200697",
        picture: "https://api.deezer.com/artist/5200697/image",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/artist/5a6a39a4e4b68a739259a72336b84d1f/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://e-cdns-images.dzcdn.net/images/artist/5a6a39a4e4b68a739259a72336b84d1f/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://e-cdns-images.dzcdn.net/images/artist/5a6a39a4e4b68a739259a72336b84d1f/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://e-cdns-images.dzcdn.net/images/artist/5a6a39a4e4b68a739259a72336b84d1f/1000x1000-000000-80-0-0.jpg",
        radio: true,
        tracklist: "https://api.deezer.com/artist/5200697/top?limit=50",
        type: "artist",
      },
      album: {
        id: 368737257,
        title: "Bombonzinho (Ao Vivo)",
        cover: "https://api.deezer.com/album/368737257/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/b8302df0a96470ee5aadecc92e76ff68/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/b8302df0a96470ee5aadecc92e76ff68/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/b8302df0a96470ee5aadecc92e76ff68/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/b8302df0a96470ee5aadecc92e76ff68/1000x1000-000000-80-0-0.jpg",
        md5_image: "b8302df0a96470ee5aadecc92e76ff68",
        tracklist: "https://api.deezer.com/album/368737257/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 1733341617,
      title: "Pipoco",
      title_short: "Pipoco",
      title_version: "",
      link: "https://www.deezer.com/track/1733341617",
      duration: 194,
      rank: 990238,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 0,
      preview:
        "https://cdns-preview-3.dzcdn.net/stream/c-387df16f98cf4c4c82b3e03a463caa33-4.mp3",
      md5_image: "52298dc3fe7fdd6fd1c2bc80227c3a52",
      position: 3,
      artist: {
        id: 123053672,
        name: "Ana Castela",
        link: "https://www.deezer.com/artist/123053672",
        picture: "https://api.deezer.com/artist/123053672/image",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/artist/5db09a77e57586c338351e3c5b3b2298/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://e-cdns-images.dzcdn.net/images/artist/5db09a77e57586c338351e3c5b3b2298/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://e-cdns-images.dzcdn.net/images/artist/5db09a77e57586c338351e3c5b3b2298/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://e-cdns-images.dzcdn.net/images/artist/5db09a77e57586c338351e3c5b3b2298/1000x1000-000000-80-0-0.jpg",
        radio: true,
        tracklist: "https://api.deezer.com/artist/123053672/top?limit=50",
        type: "artist",
      },
      album: {
        id: 314207307,
        title: "Pipoco",
        cover: "https://api.deezer.com/album/314207307/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/52298dc3fe7fdd6fd1c2bc80227c3a52/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/52298dc3fe7fdd6fd1c2bc80227c3a52/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/52298dc3fe7fdd6fd1c2bc80227c3a52/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/52298dc3fe7fdd6fd1c2bc80227c3a52/1000x1000-000000-80-0-0.jpg",
        md5_image: "52298dc3fe7fdd6fd1c2bc80227c3a52",
        tracklist: "https://api.deezer.com/album/314207307/tracks",
        type: "album",
      },
      type: "track",
    },
    {
      id: 1589171262,
      title: "Mal Feito (Ao Vivo)",
      title_short: "Mal Feito",
      title_version: "(Ao Vivo)",
      link: "https://www.deezer.com/track/1589171262",
      duration: 177,
      rank: 994750,
      explicit_lyrics: false,
      explicit_content_lyrics: 0,
      explicit_content_cover: 0,
      preview:
        "https://cdns-preview-a.dzcdn.net/stream/c-a0a0ed84d57ec15618f11e2f50ad0309-3.mp3",
      md5_image: "93fb565b4988079ed6b9a4adf8b6571c",
      position: 4,
      artist: {
        id: 10633657,
        name: "Hugo & Guilherme",
        link: "https://www.deezer.com/artist/10633657",
        picture: "https://api.deezer.com/artist/10633657/image",
        picture_small:
          "https://e-cdns-images.dzcdn.net/images/artist/93736fb86b169df342f61b18dba47193/56x56-000000-80-0-0.jpg",
        picture_medium:
          "https://e-cdns-images.dzcdn.net/images/artist/93736fb86b169df342f61b18dba47193/250x250-000000-80-0-0.jpg",
        picture_big:
          "https://e-cdns-images.dzcdn.net/images/artist/93736fb86b169df342f61b18dba47193/500x500-000000-80-0-0.jpg",
        picture_xl:
          "https://e-cdns-images.dzcdn.net/images/artist/93736fb86b169df342f61b18dba47193/1000x1000-000000-80-0-0.jpg",
        radio: true,
        tracklist: "https://api.deezer.com/artist/10633657/top?limit=50",
        type: "artist",
      },
      album: {
        id: 280055352,
        title: "Mal Feito (Ao Vivo)",
        cover: "https://api.deezer.com/album/280055352/image",
        cover_small:
          "https://e-cdns-images.dzcdn.net/images/cover/93fb565b4988079ed6b9a4adf8b6571c/56x56-000000-80-0-0.jpg",
        cover_medium:
          "https://e-cdns-images.dzcdn.net/images/cover/93fb565b4988079ed6b9a4adf8b6571c/250x250-000000-80-0-0.jpg",
        cover_big:
          "https://e-cdns-images.dzcdn.net/images/cover/93fb565b4988079ed6b9a4adf8b6571c/500x500-000000-80-0-0.jpg",
        cover_xl:
          "https://e-cdns-images.dzcdn.net/images/cover/93fb565b4988079ed6b9a4adf8b6571c/1000x1000-000000-80-0-0.jpg",
        md5_image: "93fb565b4988079ed6b9a4adf8b6571c",
        tracklist: "https://api.deezer.com/album/280055352/tracks",
        type: "album",
      },
      type: "track",
    },
  ]
  return (
    <>
      <Text
        as='h1'
        fontFamily={"Roboto"}
        textAlign={"center"}
        mt={"2rem"}
        fontSize={"3xl"}
        colorScheme={"blue"}
        //bgGradient='linear(to-l, #7928CA,#FF0080)'
        //bgClip='text'
      >
        Top World
      </Text>
      <Flex mt={"2rem"} gap={10} justifyContent={"center"}>
        {musics.map((music) => (
          <Card key={music.id} maxW='2xs'>
            <CardBody>
              <Image
                src={music.album.cover_medium}
                alt={music.title}
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading color='blue.600' size='md' fontFamily={"Roboto"}>
                  {music.title}
                </Heading>
                <Text fontSize={"1rem"} fontFamily={"Roboto"}>
                  Artist: {music.artist.name}
                </Text>
                <Text fontSize={"1rem"} fontFamily={"Roboto"}>
                  Album: {music.album.title}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup justifyContent={"center"} spacing='2'>
                <Button variant='ghost' colorScheme='blue'>
                  <FaPlay />
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                  <FaPause />
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                  <FaDeezer />
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                  <FaStar />
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </Flex>
    </>
  )
}

export default CardMusic
