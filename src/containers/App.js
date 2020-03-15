import React, { useState, useEffect, Fragment, useRef } from 'react';
import CssInputPanel from '../components/CssInputPanel'
import OptionPanel from '../components/OptionPanel'
import JssOutputPanel from '../components/JssOutputPanel'
import { transform } from '../css-to-jss'
import { defaultOptions, demoCssInput, defaultCssInput } from '../css-to-jss/constant';
import { createUseStyles } from 'react-jss'
import Title from '../components/Title';
import cx from 'classnames'
import Footer from '../components/Footer';

const useStyles = createUseStyles({
  flex: {
    display: "flex",
    padding: 8,
  },
  title: {
    flexGrow: 0,
    flexBasis: '40%'
  },
  optionPanel: {
    flexGrow: 1,
    flexBasis: '60%'
  },

  container: {
    backgroundColor: '#eee',
    justifyContent: 'space-around'
  },
  cssInputPanel: {
    flex: "1 1 50%",
    margin: 4
  },
  jssOutputPanel: {
    flex: "1 1 50%",
    margin: 4
  },
  demoBtn: {
    padding: 8
  },
})


function App({ className }) {
  const classes = useStyles()
  
  const [cssInput, setCssInput] = useState(localStorage.getItem("cssinput") || defaultCssInput, "cssInput")
  const [options, setOptions] = useState(defaultOptions)
  const [jssOutput, setJssOutput] = useState(" ")
  
  useEffect(() => {
    transform(cssInput, options).then(result => {
      setJssOutput(result)
    }).catch(err => {
      setJssOutput(err.toString())
    })
  }, [cssInput, options])


  const localCssInput = useRef()
  useEffect(() => {
    localCssInput.current = cssInput
  }, [cssInput])
  
  useEffect(() => {
    console.log("set unload")
    window.onunload = () => {
      console.log("onunload")
      localStorage.setItem('cssinput', localCssInput.current)
    }
  }, [])

  return (
    <>
      <div className={classes.flex}>
        <Title className={classes.title} />
        <OptionPanel
          className={classes.optionPanel}
          options={options}
          onChange={setOptions}
        />
      </div>

      <div className={className}>
        <div className={cx(classes.flex, classes.container)}>
          <CssInputPanel
            className={classes.cssInputPanel}
            value={cssInput}
            onChange={setCssInput}
          />
          <JssOutputPanel
            className={classes.jssOutputPanel}
            value={jssOutput}
          />
        </div>
      </div>

      <div className={classes.flex}>
        <Footer />
      </div>

      {/* <div className={classes.demoBtn}>
          <button onClick={() => setCssInput(demoCssInput)}>try demo</button>
        </div> */}


    </>
  )
}

export default App;
