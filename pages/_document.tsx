import { Html, Head, Main, NextScript } from 'next/document'
import metadata from '../data/metadata'
export default function Document() {
  return (
    <Html lang='en'>
      <Head> 
      <meta property="og:site_name" content={metadata.author} />
      <meta content={metadata.description} name="description" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}