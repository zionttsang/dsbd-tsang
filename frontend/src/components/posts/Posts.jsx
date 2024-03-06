// 'use client'

import styles from './posts.module.css'
import axios from 'axios'
import { getPosts } from '@/lib/utils'

const Posts = async () => {
  // const [threads, setThreads] = useState([])
  // useEffect(() => {
  //   axios.get(`http://localhost:3001/getThreads`)
  //     .then(threads => setThreads(threads.data))
  //     .catch(err => console.log(err))
  // }, [])

  // return (
  //   <ul className={styles.threads}>
  //     {
  //       threads.map((thread) => (
  //         <li key={thread.id} className={styles.thread}>
  //           <a href={thread.link}>{thread.title}</a>
  //           <a className={styles.likeCount}>{thread.likeCount}</a>
  //           <a className={styles.date}>{thread.date}</a>
  //         </li>
  //       ))
  //     }
  //   </ul>
  // )

  const threads = await getPosts()
  // console.log(threads)

  return (
    <ul className={styles.threads}>
      {
        threads.map((thread) => (
          <li key={thread.id} className={styles.thread}>
            <a href={thread.link}>{thread.title}</a>
            <a className={styles.likeCount}>{thread.likeCount}</a>
            <a className={styles.date}>{JSON.stringify(thread.joinDate)}</a>
          </li>
        ))
      }
    </ul>
  )
}

export default Posts