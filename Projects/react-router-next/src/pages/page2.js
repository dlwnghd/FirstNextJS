import Link from "next/link";
import Layout from "../components/Layout";

export default function PageTwo() {
  return (
    <Layout>
      <p>Page 2</p>

      <Link className="App-link" href="/">
        Previous Page
      </Link>
    </Layout>
  );
}
