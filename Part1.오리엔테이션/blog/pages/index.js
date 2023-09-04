import Head from 'next/head'
import Layout, { siteTitle } from '/components/Layout'
import utilStyles from '/styles/utils.module.css'
// import { getSortedPostsData } from '/lib/posts'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Date from '/components/Date'

// SSG로 할 때
// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData,
//     },
//   }
// }

// SSR방식으로 바꾼다면❓
// getStaticProps() => getServerSideProps()
export async function getServerSideProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

// export default function Home({ allPostsData }) {

// CSR방식으로 바꾼다면❓

// export default function Home() {
  // const [allPostsData, setAllPostData] = useState([])
  // useEffect(() => {
  //   fetch('/api/posts')
  //   .then((res) => res.json())
  //   .then((data) => setAllPostData(data.allPostsData))
  // },[])

// getStaticProps(SSG)에서 api를 직접 호출하는 방식으로 바꾼다면❓
// export async function getStaticProps() {
//   const response = await fetch('http://localhost:3000/api/posts')
//   const json = await response.json()

//   return {
//     props: {
//       allPostsData: json.allPostsData,
//     },
//   }
// }

export default function Home({ allPostsData }) {
  // // *CSR 방식 시작 *
  // const [allPostsData, setAllPostData] = useState([])
  // useEffect(() => {
  //   fetch('/api/posts')
  //     .then((res) => res.json())
  //     .then((data) => setAllPostData(data.allPostsData))
  // }, [])
  // // *CSR 방식 끝 *
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>안녕하세요~ 적당히 바람이 시원해 기분이 너무 좋아요 유후⭐</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
