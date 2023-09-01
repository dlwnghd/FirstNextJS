import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'
import { useState } from 'react'

export async function getServerSideProps() {
  console.log('ssr : 서버에서 실행됨')

  return {
    props: {},
  }
}

export default function MyInfo() {
  const router = useRouter()
  const [clicked, setClicked] = useState(false)
  const { status = 'initial' } = router.query

  // router를 이용한 값 변경을 할 시 해당 컴포넌트 전체가 변경되고 있음
  //  > 불필요한 렌더링이 발생할 수 있는 가능성이 있음

  // shallow는 낙관적 업데이트 적용이라고 부르기에 적합한가?

  return (
    <main>
      <h1>My Info</h1>
      <h1>Clicked : {String(clicked)}</h1>
      <h1>Status : {status}</h1>
      <br />
      <button
        onClick={() => {
          alert('button clicked!')
          setClicked(!clicked)
          location.replace('/settings/my/info?status=editing')
        }}
      >
        edit(replace)
      </button>
      <br />
      <button
        onClick={() => {
          alert('button clicked!')
          setClicked(!clicked)
          router.push('/settings/my/info?status=router.push()')
        }}
      >
        edit(router.push)
      </button>
      <br />
      <button
        onClick={() => {
          alert('button clicked!')
          setClicked(!clicked)
          // router.push('/settings/my/info?status=router.push(shallow)', undefined, {shallow: false})
          router.push(
            '/settings/my/info?status=router.push(shallow)',
            undefined,
            { shallow: true },
          )
          // router.push('/leejh/height', undefined, {shallow: true,})
        }}
      >
        edit(router.push(shallow))
      </button>
    </main>
  )
}

MyInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
