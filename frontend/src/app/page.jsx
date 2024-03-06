// 'use client'

import Posts from "@/components/posts/Posts";
import { getPosts } from "@/lib/utils";
import styles from './homepage.module.css'

export default async function Home() {

  return <div>
    <Posts></Posts>
  </div>
}