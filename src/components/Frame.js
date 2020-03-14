import React from 'react';
// import logo from './logo.svg';
import { transform } from '../css-to-jss'
import { defaultOptions } from '../css-to-jss/constant';

function App(props) {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default App;
