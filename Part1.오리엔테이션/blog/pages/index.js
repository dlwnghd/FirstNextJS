import Head from 'next/head'
import Link from 'next/link'
import { getSortedPostsData } from '/lib/posts'
import Date from '@components/Date'

import { siteTitle } from '@pages/_document'
import utilStyles from '@styles/utils.module.css'

// SSG로 할 때
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData,
    },
  }
}

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
    <>
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
    </>
  )
}
