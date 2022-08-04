import { Card, Grid } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts/Layout';
import {NoFavorites} from '../../components/ui';
import FavoritePokemons from '../../components/ui/FavoritePokemons';
import localFavorites from '../../utils/localFavorites';

const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())
  }, [])
  

  return (
    <Layout title="Favorites-Page">

      {favoritePokemons.length === 0 ? (
        <NoFavorites/>
      ): (
        <FavoritePokemons pokemons={favoritePokemons}/>
      )}
    </Layout>
  )
}

export default FavoritesPage