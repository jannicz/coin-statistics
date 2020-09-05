import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Coin Statistics PWA</title>
        <meta charSet='utf-8'/>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
        <meta name='viewport'
              content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'/>
        <meta name='description' content='Description'/>
        <meta name='keywords' content='Keywords'/>
        <meta name="theme-color" content="#317EFB"/>

        <link rel="manifest" href="/manifest.json"/>
        <link href='/icons/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16'/>
        <link href='/icons/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32'/>
        <link rel="apple-touch-icon" href="/icons/apple-icon.png"/>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to Coin Statistics PWA
        </h1>
        <h2>A service worker is being registered...</h2>
      </main>

      <footer>
        Janek
      </footer>
    </>
  );
}
