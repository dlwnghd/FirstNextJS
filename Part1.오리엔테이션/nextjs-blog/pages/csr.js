import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SubLayout from "../components/SubLayout";

export default function CSR() {
  const [time, setTime] = useState();

  useEffect(() => {
    console.log("클라이언트에서 동작");
    setTime(new Date().toISOString()), [];
  }, []);

  return (
    <main>
      <h1>{time}</h1>
    </main>
  );
}

CSR.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
