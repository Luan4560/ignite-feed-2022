import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import  './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/luan4560.png',
      name: 'Luan Nascimento',
      role: 'React Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz  no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', icon: '👉', content:'jane.design/doctorcare'},
    ], 
    publishedAt: new Date('2022-08-15 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://scontent-lcy1-1.xx.fbcdn.net/v/t1.6435-9/58543233_1197211640450782_5651019042647965696_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=V3Z2SieSV4cAX_n3iIe&_nc_ht=scontent-lcy1-1.xx&oh=00_AT8KxoP14oXdwL6Bllg8wNZwGOIcPFvowYCIgKmGvS4m2A&oe=631E9085',
      name: 'Cássia Ferreira',
      role: 'Psychologist'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz  no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', icon: '👉', content:'jane.design/doctorcare'},
    ], 
    publishedAt: new Date('2022-08-10 20:00:00'),
  },
]

function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
          <main>
           {posts.map(post => (
             <Post
              key={post.id} 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
             />
           ))}
          </main>
      </div>
    </>
  )
}

export default App
