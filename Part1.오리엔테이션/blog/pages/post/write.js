import React, { forwardRef, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'

// export async function getSercerSideProps() {
//   return {}
// }

export default function write() {
  const router = useRouter()

  useEffect(() => {
    if (router.isReady) {
      console.log(JSON.stringify(router.basePath))
    }
    router.prefetch('/posts/ssg-ssr')
  }, [router])

  useEffect(() => {
    console.log(router.query)
  }, [router.query])

  const idRef = useRef(undefined)
  const titleRef = useRef(undefined)
  const contentRef = useRef(undefined)

  const [showLink, setShowLink] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    const id = idRef.current.value
    const title = titleRef.current.value
    const content = contentRef.current.value

    if (id && title && content) {
      fetch('/api/post/write', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id,
          title,
          content,
        }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
          throw new Error('Fetch Error')
        })
        .then((data) => {
          setShowLink(true)
          alert(data.message)
        })
        .catch((error) => alert(`request error: ${error}`))
    }
  }

  return (
    <>
      <Head>
        <title>Write a Post</title>
      </Head>
      <h1>Write a post</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="id" required ref={idRef} />
        <br />
        <input
          type="text"
          name="title"
          placeholder="title"
          required
          ref={titleRef}
        />
        <textarea
          type="text"
          name="content"
          placeholder="content"
          required
          ref={contentRef}
        />
        <br />
        <br />
        <input
          className="rounded bg-pink-500 px-1"
          type="submit"
          value="Create"
        />
      </form>
      {showLink && (
        <Link href={`/posts/${idRef.current.value}`}>Created Posts</Link>
      )}
      <br />
      <br />
      <button
        onClick={() =>
          router.push('/posts/[id]', '/posts/ssg-ssr', { scroll: false })
        }
        className="rounded bg-green-500 px-1"
      >
        router.push
      </button>
      {/* push의 경우 history(이전 페이지 기록)를 남기고 페이지를 이동 */}
      <br />
      <br />
      <button
        onClick={() => router.replace('/posts/ssg-ssr')}
        className="rounded bg-blue-500 px-1"
      >
        router.replace
      </button>
      {/* replace의 경우 history(이전 페이지 기록)를 남기지 않고 페이지를 이동 */}
      <br />
      <br />
      <button
        onClick={() => router.back('/posts/ssg-ssr')}
        className="rounded bg-yellow-500 px-1"
      >
        router.back
      </button>
      {/* back의 경우 뒤로가기 */}
      <br />
      <br />
      <button
        onClick={() => router.reload('/posts/ssg-ssr')}
        className="rounded bg-yellow-500 px-1"
      >
        router.reload
      </button>
      {/* reload의 경우 새로고침 
          scroll 값을 받아서 스크롤의 위치를 바꿀수는 없지만
          window.scrollTo(0,0); 이벤트를 실행하는 함수를 주면 가능하긴 하다
      */}
      <Link href="/posts/ssg-ssr" passHref legacyBehavior>
        <LinkButton />
      </Link>
      <br />
      <br />
      <Link href="/posts/ssg-ssr" replace scroll={false}>
        scroll test
      </Link>
      {/* scroll의 경우 url이동 전 해당 페이지의 스크롤 위치의 기억 여부를 결정 
          false : 스크롤 위치 기억
          true  : 스크롤 위치 최상단으로 이동
      */}
    </>
  )
}

const LinkButton = forwardRef(function Button({ href }, ref) {
  return (
    <a href={href} ref={ref}>
      {href}로
    </a>
  )
})

// write.getInitialProps = async () => {
//   return {}
// }
