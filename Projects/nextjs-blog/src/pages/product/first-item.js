import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

export default function FirstItem() {
  return (
    <main>
      <h1>First Item</h1>
    </main>
  )
}

FirstItem.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
