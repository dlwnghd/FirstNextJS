import { useRouter } from 'next/router'
import { useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import Layout from '@components/Layout'
import '@styles/globals.css'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [visitedTime] = useState(new Date())

  return (
    <Layout home={router.pathname === '/'}>
      <div>
        visited:{' '}
        {formatDistanceToNow(new Date(visitedTime), {
          addSuffix: true,
          includeSeconds: true,
        })}
      </div>
      <Component {...pageProps} pathname={router.pathname} />
    </Layout>
  )
}
