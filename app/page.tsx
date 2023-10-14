import styles from './page.module.css'
import LandingPage from './Components/LandingPage'
export default function Home() {
  return (
    <main className={styles.main}>
      <div >
       <LandingPage /> 
      </div>
    </main>
  )
}
