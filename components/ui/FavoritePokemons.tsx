import { Grid, Card } from "@nextui-org/react"
import FavoriteCard from './FavoriteCard';

interface Props {
    pokemons: number[];
}

const FavoritePokemons = ({pokemons}: Props) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
          {pokemons.map(id =>(
            <FavoriteCard id={id} key={id} />
          ))}
        </Grid.Container>
  )
}

export default FavoritePokemons