import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

export default function CartDateSlug() {
  return (
    <main>
      <h1>Cart Date Slug</h1>
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
