import React from 'react';
import './App.css';
import NonScrollDiv from './FirstHomework';
import StyledCheckBox from './SecondHomework';
import ImgLoader from './FifthHomework';
import SearchText from './ForthHomework';

function App() {
  return (
    <div id="MainDiv">
      <p>first homework</p>
      <NonScrollDiv/>
      <p>second homework</p>
      <StyledCheckBox/>
      <p>forth homework</p>
      <SearchText/>
      <p>fifth homework</p>
      <ImgLoader/>
    </div>
  );
}

export default App;
