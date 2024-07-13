import { useState } from 'react'
import './App.css'
import SectionA from './components/SectionA/SectionA';
import SectionB from './components/SectionB/SectionB';
import CardContainer from './components/CardContainer/CardContainer';
import FeatureBoxes from './components/featureBoxes/FeatureBoxes'
import Footer from './components/Footer/Footer';
import ColorSelector from './components/ColorSelector/ColorSelector';

function App() {

  async function logout() {
    const res = await fetch("/registration/logout/", {
      credentials: "same-origin", // include cookies!
    });

    if (res.ok) {
      // navigate away from the single page app!
      window.location = "/registration/sign_in/";
    } else {
      // handle logout failed!
    }
  }

  const titleExpansion = () => {
    console.log('expandLetters function called');
    const header = document.querySelector('.section-a h1');
    if (header) {
      header.style.letterSpacing = '-20px';
      header.style.transition = 'letter-spacing 1s ease-in-out';
      setTimeout(() => {
        header.style.letterSpacing = '50px';
      }, 100);
    }
  };

  return (
    <>
      <SectionA titleExpansion={titleExpansion} />
      <SectionB color="rgb(14,19,8)">
        <FeatureBoxes/>
      </SectionB>
      <SectionB color="#f1faee"></SectionB>
      <SectionB color="#f1faee"></SectionB>
      <Footer/>
    </>
  )
}

export default App;
