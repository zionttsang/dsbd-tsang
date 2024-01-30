// 'use client'

import Posts from "@/components/posts/Posts";

export default function Home() {
  return <div>
    <Posts />
  </div>
}

// export default function Home() {

//   const [threads, setThreads] = useState([])
//   useEffect(() => {
//     axios.get('http://localhost:3001/getThreads')
//       .then(threads => setThreads(threads.data))
//       .catch(err => console.log(err))
//   }, [])

//   return (
//     <tbody>
//       {
//         threads.map(thread => {
//           return <tr className={styles.threads}>
//             <td className={styles.thread}><a href={thread.link}>{thread.title}</a></td>
//             <td className={styles.likeCount}>{thread.likeCount}</td>
//             <td className={styles.date}>{thread.date}</td>
//           </tr>
//         })
//       }
//     </tbody>
//   )
// }
