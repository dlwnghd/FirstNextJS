import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

export default function MyInfo() {
  return (
    <main>
      <h1>My Info</h1>
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
