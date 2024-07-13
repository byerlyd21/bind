import { useState } from 'react'
import './App.css'
import SectionA from './components/SectionA/SectionA';
import SectionB from './components/SectionB/SectionB';
import CardContainer from './components/CardContainer/CardContainer';
import FeatureBoxes from './components/featureBoxes/FeatureBoxes'
import Footer from './components/Footer/Footer';
import ColorSelector from './components/ColorSelector/ColorSelector';

const App = () => {
  const [themeVars, setThemeVars] = useState({
    primaryLight: '--theme-melon-pop-primary-light',
    primaryDark: '--theme-melon-pop-primary-dark',
    secondaryLight: '--theme-melon-pop-secondary-light',
    secondaryDark: '--theme-melon-pop-secondary-dark',
  });

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


  const handleColorChange = (vars) => {
    setThemeVars(vars);
    document.documentElement.style.setProperty('--theme-background', `var(${vars.primaryLight})`);
    document.documentElement.style.setProperty('--theme-color', `var(${vars.primaryDark})`);
  };

  return (
    <>
      <SectionA titleExpansion={titleExpansion} />
      <SectionB color="rgb(14,19,8)">
        <FeatureBoxes/>
      </SectionB>
      <SectionB color="#f1faee"></SectionB>
      <SectionB color="#f1faee"></SectionB>
      <ColorSelector onColorChange={handleColorChange} />
      <Footer/>
    </>
  )
}

export default App;
