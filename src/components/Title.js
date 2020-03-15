import React from 'react';

function Title({ className, ...props }) {
  return (
    <div className={className}>
      <h1>Css to Jss Converter</h1>
      <p>A simple tool to convert Css to Jss. <a href="https://cssinjs.org" target="_blank" rel="noopener noreferrer">About Jss</a></p>
    </div>
  )
}

export default Title;
