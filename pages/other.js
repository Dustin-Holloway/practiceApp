import Head from "next/head";
import Card from "../components/card";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Page2() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Head>
        <title>Page2</title>
      </Head>
      <button className="heading" onClick={(e) => setShow(!show)}>
        {" "}
        SHOW{" "}
      </button>
      <Link href="/">
        <h1>Home</h1>
      </Link>
      {!show ? <Card /> : null}
      <img src="/images/profile.jpg" />
      <Image alt="image" src="/images/profile.jpg" height={100} width={100} />
    </>
  );
}
