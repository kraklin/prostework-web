import React from "react";

import { Hero } from "Blocks/Hero";
import { Tiles } from "Blocks/Tiles";
import { Layout } from "Layout/Layout";

const IndexPage = () => (
  <div>
    <Layout>
      <Hero />
      <div className="uk-panel uk-light uk-margin-medium" />
      <hr className="uk-divider-icon" />
      <Tiles />
    </Layout>
  </div>
);

export default IndexPage;
