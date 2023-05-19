import { FC, ReactNode } from 'react';
import Head from "next/head";
import { Navbar } from '../ui';

interface Props {
	children: ReactNode
	title: string;
}

export const Layout: FC<Props> = ({ children, title } ) => {
  return (
		<>
			<Head>
			  <title>{title || 'Pokemon App'}</title>  
				<meta name="autor" content="Martin Barros" />
				<meta name="description" content={`Información sobre el pokemón ${ title }`} />
				<meta name="keywords" content={`${ title } pokemon, pokedex`} />
			</Head>
				
			<Navbar />

			<main style={{
				padding: '0px 20px'
			}}>
				{ children }
			</main>

		</>
  )
}
