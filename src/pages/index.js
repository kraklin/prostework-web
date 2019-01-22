import React from 'react';

import { Hero } from '../components/Blocks/_Hero';
import { Stats } from '../components/Blocks/_Stats';
import { Tiles } from '../components/Blocks/_Tiles';
import { CardsRow } from '../components/Blocks/_CardsRow';
import { Comments } from '../components/Blocks/_Comments';
import { NewsLetter } from '../components/Blocks/_Newsletter';
import { Layout } from '../components/Layout/layout'

const IndexPage = () => (
  <div>
  <Layout>
    <Hero />
    <Stats />
    <div className="uk-panel uk-light uk-margin-medium" />
    <hr className="uk-divider-icon" />
    <Tiles />
    <div className="uk-panel uk-light uk-margin-medium" />
    <CardsRow />
    <div className="uk-panel uk-light uk-margin-medium" />
    <Comments />
    <div className="uk-panel uk-light uk-margin-medium" />
    <NewsLetter />
  </Layout>
  </div>
);

export default IndexPage;
