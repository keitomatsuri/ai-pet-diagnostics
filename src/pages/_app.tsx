import Head from 'next/head'
import type { AppProps } from 'next/app'
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "@/lib/gtag";
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouterChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouterChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouterChange);
    };
  }, [router.events]);

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
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gtag.GA_MEASUREMENT_ID}');
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
