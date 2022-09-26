import Head from 'next/head'
import Main from "@components/pages/main/Main";

export default function Home() {
  return (
    <div className={"mh-100"}>
      <Head>
        <title>Студия ТМ</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        <Main/>
      </main>
    </div>
  )
}
