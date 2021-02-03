import React from 'react'
import Head from "next/head";

import RocketSeatLogo from '../assets/williamshipa.svg';
import { Container } from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      {/* <main> */}
        <RocketSeatLogo/>
        <h1>This a ReactJJ Structure with NextJS</h1>
        <p>A ReactJS + Next.JS by William.</p>
      {/* </main> */}

      {/* <footer >
       <h2>Footer now</h2>
      </footer> */}
    </Container>
  );
}

export default Home
