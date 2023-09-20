import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'

export default function CategorySlug() {
  const router = useRouter()
  const { slug, from, age } = router.query

  // 정의되지 않은 쿼리값이 온다면 undefined처리가 된다.
  console.log(age)

  return (
    <main>
      <h1>
        Category {slug} from {from} age {age}
      </h1>
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
