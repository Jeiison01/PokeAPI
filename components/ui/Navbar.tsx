import { Link, Spacer, Text, useTheme, Button } from '@nextui-org/react';
import Image from "next/image"
import NextLink from "next/link"


export const Navbar = () => {

    const {theme} = useTheme()

  return (
    <div style={{
        display: "flex",
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0x 50px',
        backgroundColor: theme?.colors.gray700.value
    }}>

        <Image
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png'
            alt='Icon PokeAPI'
            width={30}
            height={30}
        />
        <NextLink href='/' passHref>
          <Link>
              <Text color="white" h2>P</Text>
              <Text color="white" h3>okémon</Text>
          </Link>

        </NextLink>

        <Spacer css= {{ flex: 1}} />

        <NextLink href='/favorites' style={{}}>
          <Text color="white" css={{marginRight: '10px', cursor: 'pointer'}}>Favoritos</Text>
        </NextLink>

    </div>
  )
}