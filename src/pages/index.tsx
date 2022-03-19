import type { NextPage } from 'next';
import Head from 'next/head';

import * as S from '../styles/pages/Home';

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

        <div>Map</div>
      </S.MainContainer>
    </>
  );
};

export default Home;
