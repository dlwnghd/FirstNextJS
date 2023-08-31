import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

export default function UserNameInfo() {
  return (
    <main>
      <h1>UserName Info</h1>
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
