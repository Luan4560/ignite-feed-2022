import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import  './global.css'
import styles from './App.module.css'


function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
          <main>
            <Post 
            author="Luan Nascimento" 
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Architecto laboriosam exercitationem fuga nemo pariatur ducimus? 
              Nulla quidem porro quos maxime facere molestias et ipsa expedita
              non consectetur, illum, exercitationem nam!"
            />

            <Post 
              author="Cássia Ferreira" 
              content="Architecto laboriosam exercitationem fuga nemo pariatur ducimus?"
            />
          </main>
      </div>
    </>
  )
}

export default App
