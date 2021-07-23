import React from 'react';
import FeaturedContent from './FeaturedContent';
import LatestContent from './LatestContent';
import About from './About';

const Home = () => {
  return (
    <React.Fragment>
      {/* <main> */}
      <FeaturedContent />
      <LatestContent />
      {/* </main> */}
      <About />
    </React.Fragment>
  );
}

export default Home;