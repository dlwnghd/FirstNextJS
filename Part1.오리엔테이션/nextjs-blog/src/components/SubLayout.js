import Link from 'next/link'

export default function SubLayout({ children }) {
  return (
    <>
      <h1>
        <Link href="/">Home 으로</Link>
      </h1>
      {children}
    </>
  )
}
