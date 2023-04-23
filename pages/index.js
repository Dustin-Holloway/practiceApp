import Head from "next/head";
import Link from "next/link";
// import Layout from "@/components/layout";

export default function Home() {
  return (
    // <Layout>
    <div>
      <Head>
        <title>Main</title>
      </Head>
      <div>
        <h1>Dustins practice app</h1>
        <Link href="/other">
          <h1>Page 2</h1>
        </Link>
      </div>
      {/* // </Layout> */}
    </div>
  );
}
