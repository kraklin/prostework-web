import React from 'react';

import { Hero } from 'Blocks/_Hero';
import { Stats } from 'Blocks/_Stats';
import { Tiles } from 'Blocks/_Tiles';
import { CardsRow } from 'Blocks/_CardsRow';
import { Comments } from 'Blocks/_Comments';
import { NewsLetter } from 'Blocks/_Newsletter';
import { Layout } from 'Layout/Layout'

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
