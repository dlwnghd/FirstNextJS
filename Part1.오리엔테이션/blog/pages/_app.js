/**
 * FileName    : _app.js
 * Description : 앱 js
 * Copyright 2023 by LeeJuhong
 * Author      : Leejuhong
 * CreatedAt   : 2023-09-11
 */

import { useState } from 'react'
import { useRouter } from 'next/router'
import { Analytics } from '@vercel/analytics/react'
import { formatDistanceToNow } from 'date-fns'
import Layout from '@components/Layout'

import '@styles/globals.css'
import ErrorBoundary from '@components/ErrorBoundary'

/** 웹 페이지의 기능을 확인하기 위한 function */
export function reportWebVitals(metric) {
  console.log(metric)
}

/**
 * @param Component 컴포넌트
 * @param pageProps 페이지프롭스
 * @returns
 */
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
      <ErrorBoundary>
        <Component {...pageProps} pathname={router.pathname} />
        <Analytics />
      </ErrorBoundary>
    </Layout>
  )
}
