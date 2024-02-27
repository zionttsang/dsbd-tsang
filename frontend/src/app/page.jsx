// 'use client'

import Posts from "@/components/posts/Posts";
import { getPosts } from "@/lib/utils";
import styles from './homepage.module.css'
import { Suspense } from "react";

export default async function Home() {
  const threads = await getPosts()
  // console.log(threads)

  return (
    <Suspense fallback='Loading....'>

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
    </Suspense>

  )
}