import { Html, Head, Main, NextScript } from 'next/document'
import metadata from '../data/metadata'
export default function Document() {
  return (
    <Html lang='en'>
      <Head> 
      <meta property="og:site_name" content={metadata.author} />
      <meta content={metadata.description} name="description" />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7519087055998524"
     crossOrigin="anonymous"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}