// pages/index.js

import Head from 'next/head';
import ListingPage from '../components/ListingPage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Airbnb 3D Demo</title>
        <meta name="description" content="Virtuell visning av Airbnb-eiendom" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <ListingPage />
      </main>
    </>
  );
}
