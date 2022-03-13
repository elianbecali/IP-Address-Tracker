import type { NextPage } from 'next';
import Head from 'next/head';
import { Container } from '../styles/pages/Home';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>IP Address Tracker</title>
      </Head>

      <Container>
        <h1>Hello Dev! (:</h1>
        <p>Olá Dev! (;</p>
      </Container>
    </>
  );
};

export default Home;
