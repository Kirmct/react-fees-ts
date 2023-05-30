import {Header} from "./components/Header/Header"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Post } from "./components/Post/Post"

import styles from "./App.module.css"
import "./global.css"

const posts = [
  {
    id: 1,
    author: {
      avatar_url: "https://github.com/Kirmct.png",
      name: "Kirmct Neto",
      role: "Front End Developer",
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare'
      },    
    ],
    publishedAt: new Date('2023-05-27 12:40:00'),
  },
  {
    id: 2,
    author: {
      avatar_url: "https://github.com/lucazdj.png",
      name: "Lucas de Jesus",
      role: "Designer e Front End Developer",
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: '👉 jane.design/doctorcare'
      },    
    ],
    publishedAt: new Date('2023-05-28 12:40:00'),
  },
]

export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map((post) => {
            return (
             <Post 
              key={post.id} 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
             />
            )
          })}
        </main>
      </div>
    </div>
  )
}

