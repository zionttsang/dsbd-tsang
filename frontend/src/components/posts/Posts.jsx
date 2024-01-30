'use client'

import { useEffect, useState } from 'react'
import styles from './posts.module.css'
import axios from 'axios'

const Posts = () => {
  const [threads, setThreads] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/getThreads')
      .then(threads => setThreads(threads.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <tbody>
      {
        threads.map(thread => {
          return <tr className={styles.threads}>
            <td className={styles.thread}><a href={thread.link}>{thread.title}</a></td>
            <td className={styles.likeCount}>{thread.likeCount}</td>
            <td className={styles.date}>{thread.date}</td>
          </tr>
        })
      }
    </tbody>
  )
}

export default Posts