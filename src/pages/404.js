import React from "react";
import Layout from "Layout/Layout";
import PageHeader from "Blocks/PageHeader";
import Image from "Images/hero-bg_1200.jpg";
import Link from "gatsby-link";

const NotFoundPage = () => (
  <Layout>
    <PageHeader imgSrc={Image} />
    <div className="uk-section uk-margin-large">
      <div className="uk-container-large uk-margin-auto uk-width-1-2@l uk-width-2-3@s uk-width-3-4">
        <h1 className="uk-heading">Bohužel, tato stránka neexistuje.</h1>
        <p>
          Stránka, kterou hledáte zde bohužel není. Přejďete na{" "}
          <Link to="/">hlavní stránku</Link>.
        </p>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
