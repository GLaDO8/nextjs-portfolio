import Head from 'next/head'
import Script from 'next/script'
export default function Meta() {
  return (
    <Head>
      <Script
        defer
        data-domain="shreyas.design"
        src="https://plausible.io/js/plausible.js"
      ></Script>
    </Head>
  )
}
