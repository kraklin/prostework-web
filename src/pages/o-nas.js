import React from "react";
import Layout from "Layout/Layout";
import PageHeader from "Blocks/PageHeader";
import Image from "Images/hero-bg_1200.jpg";

const AboutUsPage = () => (
  <Layout>
    <PageHeader title="O nás" imgSrc={Image} />
    <div className="uk-section uk-margin-large">
      <div className="uk-container-large uk-margin-auto uk-width-1-2@l uk-width-2-3@s uk-width-3-4">
        <h2 className="uk-heading">Co je ProstěWork?</h2>
        <p>
          ProstěWork je první sdílená kancelář v Prostějově, kam chodí pracovat
          lidi z různých oborů - kdokoliv, komu k práci stačí stůl, židle a
          notebook.
        </p>

        <p>
          Stačí si vybrat kolik času chceš v coworku měsíčně trávit, a když
          přijdeš jednoduše si vybereš, kde chceš sedět - rezervovat místo není
          potřeba.
        </p>

        <p>
          Nejlépe to ale poznáš, když se k nám skočíš podívat. Aktuálně
          fungujeme na zkušební provoz, takže nic neplatíš. Napiš nám a
          domluvíme se, kdy to k nám přijdeš omrknout.
        </p>
      </div>
    </div>
  </Layout>
);

export default AboutUsPage;
