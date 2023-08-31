import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

export default function CategorySlug() {
  return (
    <main>
      <h1>Category Slug</h1>
    </main>
  )
}

CategorySlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
