import Head from 'next/head'
import Link from 'next/link' // next.js에서 제공하는 Link 컴포넌트
import styles from '../../styles/Home.module.css'

export async function getServerSideProps() {
  console.log('ssr : 서버에서 실행됨')

  return {
    props: { time: new Date().toISOString() },
  }
}

export default function Home({ time }) {
  return (
    <>
      <h1>{time}</h1>
      <h1>
        <Link href="/csr">CSR로</Link>
      </h1>
      <h1>
        <Link href="/ssg">SSG로</Link>
      </h1>
      <h1>
        <Link href="/isr">ISR로</Link>
      </h1>
    </>
  )
}
