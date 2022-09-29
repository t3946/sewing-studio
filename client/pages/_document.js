import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="payok" content="payok_verification"/>
      </Head>

      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}