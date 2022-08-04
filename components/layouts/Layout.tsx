import {PropsWithChildren} from 'react'
import Head from "next/head"
import { Navbar } from '../ui';

interface Props {
    title?: string;
    children?: React.ReactNode;
  }

export const Layout = ({children, title}: Props) => {
  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name="author" content="Jeison Rodriguez"/>
            <meta name="description" content={`Information about the Pokémon ${title}`}/>
            <meta name="keywords" content={`${title}, pokemon, pokedex`}/>
        </Head>
        <Navbar/>

        <main
          style={{
            padding: '0px 20px',
          }}
        >
            {children}
        </main>
    </>
  )
}
