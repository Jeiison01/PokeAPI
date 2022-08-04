import Head from "next/head"
import { Navbar } from '../ui';

interface Props {
    title?: string;
    children?: React.ReactNode;
  }

  const origin = (typeof window === "undefined" ? '' : window.location.origin)

export const Layout = ({children, title}: Props) => {


  return (
    <>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name="author" content="Jeison Rodriguez"/>
            <meta name="description" content={`Information about the Pokémon ${title}`}/>
            <meta name="keywords" content={`${title}, pokemon, pokedex`}/>
            <meta property="og:title" content={`Information about the Pokemon $(title)`}/>
            <meta property="og:description" content={`This is the page about the Pokemon ${title}`}/>
            <meta property="og:image" content={`${origin}/img/banner.png`}/>
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
