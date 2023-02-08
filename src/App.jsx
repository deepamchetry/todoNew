import { useState } from 'react'
import styles from './App.module.css'
import MainSection from './MainSection';
import Sidenav from './Sidenav';
import Header from './Header';

function App() {
  const [active, setActive] = useState("INBOX")
  return (
    <div className={styles.container}>
      <Header />
      <div className="row">
        <div className="col-md-4">
          <Sidenav change={setActive} />
        </div>
        <div className="col-md-8">
          <MainSection active={active} />
        </div>
      </div>
    </div>
  )
}

export default App
