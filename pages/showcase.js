import styles from '../styles/Home.module.css'
import Navbar from '../src/components/Navbar'

function Showcase() {
  return <div className={styles.container}>
    <Navbar></Navbar>
    This is the showcase page!
  </div>
}

export default Showcase
