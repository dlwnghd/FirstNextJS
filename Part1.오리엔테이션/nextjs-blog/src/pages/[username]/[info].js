import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function UserNameInfo() {
  const router = useRouter()
  const { username, info, uid } = router.query
  const [name, setName] = useState('?')

  // useEffect(() => {
  //   fetch('/api/user')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setName(data.name)
  //     })
  // }, [])
  useEffect(() => {
    if (uid != null) {
      fetch(`/api/user-info/${uid}`)
        .then((res) => res.json())
        .then((data) => {
          setName(data.name)
        })
    }
  }, [uid])

  return (
    <main>
      <h1>
        {username}'s' {info}
      </h1>
      <br />
      <h1>API를 통해 받아온 Name : {name}</h1>
    </main>
  )
}

UserNameInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
