import Head from 'next/head'
import Featured from '../Components/Featured'
import PizzaList from '../Components/PizzaList'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza mart</title>
        <meta name="description" content="Best Pizza In your Town" />
        <link rel="icon" href="/img/pizzalogo.png" />
      </Head>
      <Featured></Featured>
      <PizzaList></PizzaList>
    </div>
  )
}
