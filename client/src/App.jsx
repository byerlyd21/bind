import { useState } from 'react'
import './App.css'
import SectionA from './components/SectionA/SectionA';
import SectionB from './components/SectionB/SectionB';
import CardContainer from './components/CardContainer/CardContainer';

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

  return (
    <>
      <SectionA></SectionA>
      <SectionB color="rgb(14,19,8)">
        <CardContainer />
      </SectionB>
      <SectionB color="#f1faee"></SectionB>
      <SectionB color="#f1faee"></SectionB>
      <SectionB color="#f7f7ff"></SectionB>
    </>
  )
}

export default App;
