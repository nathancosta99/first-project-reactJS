import { Header } from './components/Header.jsx';
import { Post } from './components/Post.jsx';
import { Sidebar } from './components/Sidebar.jsx';
import { Comment } from './components/Comment.jsx';


import styles from './app.module.css';
import './global.css';


const post = [
  { 
    id: 1,
    author: {
      avatarUrl: 'https://github.com/nathancosta99.png',
      name: 'Nathan Costa',
      role: 'Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-11-08 15:00:00'),
  },
   {
     id: 2,
    author: {
      avatarUrl: 'https://github.com/nathanhcr99.png',
      name: 'Nathan Rodrigues',
      role: 'Backend Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-11-09 08:00:00'),
  },

];



export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          {post.map(post => {
            return (
              <Post
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
