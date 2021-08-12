import React, { useEffect } from 'react';
import FeaturedContent from '../featuredContent/FeaturedContent';
import Shop from '../shop/Shop';
import AboutExtended from '../about/AboutExtended';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      console.log(location.hash.slice(1));
      
      let elem = document.getElementById(location.hash.slice(1))
      let headerOffset = document.getElementById('header').offsetHeight;
      let elementPosition = elem.getBoundingClientRect().top;
      let offsetPosition = elementPosition - headerOffset;
      console.log(headerOffset)
      console.log(elementPosition)
      console.log(offsetPosition)

      if (elem) {
        elem.scrollIntoView({ behavior: "smooth", block: 'start' })
        // window.scrollTo({ top: offsetPosition, left: 0, behavior: "smooth" })
        
      }
    } else {
      console.log("??")
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
  }, [location,])
  return (
    <React.Fragment>
      {/* <main> */}
      <FeaturedContent />
      <Shop />
      <AboutExtended />
    </React.Fragment>
  );
}

export default Home;