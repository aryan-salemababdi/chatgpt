import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Landing from '../components/Molecule/Landing/Landing'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Landing />
    </div>
  )
}

export default Home
