import React, { useState, useEffect, useLayoutEffect } from 'react';
// import logo from './logo.svg';
import CssInputPanel from '../components/CssInputPanel'
import OptionPanel from '../components/OptionPanel'
import JssOutputPanel from '../components/JssOutputPanel'
import { transform } from '../css-to-jss'
import { defaultOptions } from '../css-to-jss/constant';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  frame: {
    display: "flex",
  },
  cssInputPanel: {
    flex: "1 1 50%",
    padding: 8
  },
  optionPanel: {
    flex: "1 1 100%",
    padding: 8
  },
  jssOutputPanel: {
    flex: "1 1 50%",
    padding: 8
  }
})



function App() {
  const classes = useStyles()
  const [cssInput, setCssInput] = useState("", "cssInput")
  const [options, setOptions] = useState(defaultOptions)
  const [jssOutput, setJssOutput] = useState("")
  const [isError, setIsError] = useState(false)

  console.log("App")

  useEffect(() => {
    console.log("useEffetct")
    transform(cssInput, options).then(result => {
      setJssOutput(result)
    }).catch(err => {
      setJssOutput(err)
    })
  }, [cssInput, options])

  return (
    <>
      <div className={classes.frame}>
        <div className={classes.cssInputPanel}>
          <CssInputPanel
            value={cssInput}
            onChange={setCssInput}
          />
        </div>
        <div className={classes.jssOutputPanel}>
          <JssOutputPanel
            value={jssOutput}
          />
        </div>
      </div>
      <div className={classes.frame}>
        <div className={classes.optionPanel}>
          <OptionPanel
            options={options}
            onChange={setOptions}
          />
        </div>
      </div>
    </>
  )
}

export default App;
