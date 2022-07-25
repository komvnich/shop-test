import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { CardsContainer } from '../components/Cards/CardsContainer'
import { Container } from '../components/Container/container'
import { Header } from '../components/header/header'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const [search, setSearch] = useState<string>('');
  const [counter, setCounter] = useState(0);

  return (
    <Container>
        <Header 
          setSearchSelect={(e) => setSearch(e.target.value)} 
          setSearch={(e) => setSearch(e.target.value)}
          counter={counter}
        />
        <main>
          <CardsContainer onClick={() => setCounter(counter +1)} searchFilter={search}/>
        </main>
    </Container>
  )
}

export default Home
