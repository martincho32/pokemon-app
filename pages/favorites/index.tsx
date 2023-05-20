import { useEffect, useState } from "react";
import { Layout } from "@/components/layouts"
import NoFavorites from "@/components/ui/NoFavorites";
import { Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { localFavorites } from "@/utils";
import { NextPage } from "next";
import FavoritePokemons from "@/components/pokemon/FavoritePokemons";

const FavoritesPage: NextPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.getFavoritePokemons())
  }, [])
  

  return (
    <Layout title="Pokemons - Favoritos">
      {
        favoritePokemons.length === 0 
          ? ( <NoFavorites /> )
          : (
            <FavoritePokemons favoritePokemons={favoritePokemons}/>
          )
      }
    </Layout>
  )
}

export default FavoritesPage;