'use client'

import Link from "next/link";
import styles from "./homepage.module.css";
import { useEffect, useState } from "react";
import axios from 'axios'

export default function Home() {

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
          return <tr>
            <td><a href={thread.link}>{thread.title}</a></td>
            <td>{thread.likeCount}</td>
            <td>{thread.date}</td>
          </tr>
        })
      }
    </tbody>
  )
}
