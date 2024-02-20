// 'use client'

import Posts from "@/components/posts/Posts";
import { getPosts } from "@/lib/utils";
import styles from './homepage.module.css'

const threads = await getPosts()
export default function Home() {

  return (
    <ul className={styles.threads}>
      {
        threads.map((thread) => (
          <li key={thread.id} className={styles.thread}>
            <a href={thread.link}>{thread.title}</a>
            <a className={styles.likeCount}>{thread.likeCount}</a>
            <a className={styles.date}>{thread.date}</a>
          </li>
        ))
      }
    </ul>
  )
}