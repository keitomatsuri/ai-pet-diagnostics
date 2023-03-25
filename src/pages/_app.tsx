import Head from 'next/head'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>AIペット診断</title>
        <meta charSet="utf-8" />
        <meta name="description" content="質問に答えると、AIがあなたにぴったりなペットを提案してくれるサービスです。" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        <meta property="og:title" content="AIペット診断" />
        <meta property="og:description" content="質問に答えると、AIがあなたにぴったりなペットを提案してくれるサービスです。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_URL}`} />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SITE_URL}/og_image.png`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AIペット診断" />
        <meta name="twitter:description" content="質問に答えると、AIがあなたにぴったりなペットを提案してくれるサービスです。" />
        <meta name="twitter:url" content={`${process.env.NEXT_PUBLIC_SITE_URL}`} />
        <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_SITE_URL}/og_image.png`} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
