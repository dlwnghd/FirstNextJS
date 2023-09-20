import { useState } from 'react'
import { useRouter } from 'next/router'
import { MDXRemote } from 'next-mdx-remote'
import dynamic from 'next/dynamic'
import Head from 'next/head'

import { getPostData } from '/lib/posts'
import { getAllPostIds } from '/lib/posts'
import { siteTitle } from '@pages/_document'
import Date from '@components/Date'
import CodeBlock from '@components/CodeBlock'

// import Button from '@components/Button'
import utilStyles from '@styles/utils.module.css'

const Button = dynamic(() => import('@components/Button'), {
  loading: () => <div>Loading...</div>,
})

export async function getStaticPaths() {
  const paths = getAllPostIds()

  // const paths = [
  //   {
  //     params: {
  //       id: 'ssg-ssr',
  //     },
  //   },
  // ]

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params, preview }) {
  console.log(`>>>>>> ${preview}`)

  // Add the "await" keyword like this:
  const postData = await getPostData(params.id)

  return {
    props: {
      postData,
    },
  }
}

const components = { Button, CodeBlock }

const ErrorComponent = () => {
  const [error, setError] = useState(false)

  if (error) {
    throw new Error('Error occured')
  }

  return (
    <button
      className="rounded px-2 bg-green-500"
      onClick={() => setError(true)}
    >ErrorFire</button>
  )
}

export default function Post({ postData, pathname }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }
  return (
    <>
      <Head>
        <title>{`${postData.title} - ${siteTitle}`}</title>
      </Head>
      <ErrorComponent />
      <article>
        <h2>pathname : {pathname}</h2>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        {postData.contentHtml && (
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        )}
        {postData.mdxSource && (
          <MDXRemote {...postData.mdxSource} components={components} />
        )}
      </article>
    </>
  )
}
