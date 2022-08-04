import { Grid, Card } from "@nextui-org/react"
import { useRouter } from 'next/router';

interface Props {
    id: number;
}

const FavoriteCard = ({id}: Props) => {
  
  const router = useRouter()

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${id}`)
  }

  return (
    <Grid key={`${id}`} xs={6} sm={3} md={2} xl={1}>
              <Card isHoverable isPressable css={{padding: 10}} onPress={onFavoriteClicked}>
                <Card.Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                  width={'100%'}
                  height={140}
                  alt={'pokemon'}
                />
              </Card>
            </Grid>
  )
}

export default FavoriteCard