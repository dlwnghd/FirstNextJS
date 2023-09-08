import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'

// export async function getSercerSideProps() {
//   return {}
// }

export default function write() {
  const router = useRouter()

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
        <br />
        <br />
        <textarea
          type="text"
          name="content"
          placeholder="content"
          required
          ref={contentRef}
        />
        <br />
        <br />
        <input className='rounded bg-pink-500 px-1' type="submit" value="Create" />
      </form>
      {showLink && (
        <Link href={`/posts/${idRef.current.value}`}>Created Posts</Link>
      )}
    </>
  )
}

// write.getInitialProps = async () => {
//   return {}
// }
