// React
import { useEffect, useState } from 'react'

// Next
import Link from 'next/link'
import { useRouter } from 'next/router'

// Components
import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

export default function CartDateSlug() {
  const router = useRouter()
  const { date } = router.query
  const [inputData, setInputData] = useState('')

  // useEffect가 아닌 onChange를 이용해서 내부 값의 변화를 현재 DOM과 가상 DOM간의 차이를 이용하여 풀이함
  const onChangeText = (e) => {
    setInputData(e.target.value)
  }

  return (
    <main>
      <input type="text" onChange={onChangeText} />
      <h1>Cart Date Slug {JSON.stringify(date)}</h1>
      <Link href={`/cart/${inputData}`}>test inputData : {inputData}</Link>
      <br />
      <button onClick={() => router.push('/cart/2023/09/01')}>
        2023년 09월 01일
      </button>
    </main>
  )
}

CartDateSlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
