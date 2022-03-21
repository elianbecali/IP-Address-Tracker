import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import * as S from '../styles/pages/Home';

const Map = dynamic(() => import('../components/Map'), {
  ssr: false
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>IP Address Tracker</title>
      </Head>

      <S.MainContainer>
        <S.Header>
          <h1>IP Address Tracker</h1>

          <form>
            <input
              type="text"
              placeholder="Search for any IP adress or domain"
            />

            <button type="submit">
              <img src="/images/icons/icon-arrow.svg" />
            </button>
          </form>
        </S.Header>

        <S.MapWrapper>
          <Map />
        </S.MapWrapper>
      </S.MainContainer>
    </>
  );
};

export default Home;
