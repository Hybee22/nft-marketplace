import React from "react";
import { Features, SectionWrapper, Download } from "./components";

import assets from "./assets";
import styles from "./styles/Global";
const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your own store of Hybee NFTs. Start Selling and Growing"
        description="Buy, store, collect NFTs, exchange and earn crypto. Join 35+ million using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a sleek UI of ProNef NFT Marketplace. Smooth and beautiful colors of a fluent UI Design"
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />

      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all users' devices."
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains the list and details pages for the NFTs"
        mockupImg={assets.mockup}
        banner="banner02"
      />

      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love by <span className="bold">Ibrahim</span>
        </p>
      </div>
    </>
  );
};

export default App;
