import Link from "next/link";
import Layout from "../components/Layout";

export default function HomePage() {
  return (
    <Layout>
      <p>Page 1</p>

      <Link className="App-link" href="/page2">
        Next Page
      </Link>
    </Layout>
  );
}
