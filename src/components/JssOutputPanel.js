import React from 'react';
import { createUseStyles } from 'react-jss'
import MonacoEditor from 'react-monaco-editor';

const useStyles = createUseStyles({
  title: {
    margin: "0px 0px 4px 0px",
    textAlign: 'center'
  }
})

const options = {
  selectOnLineNumbers: true,
  roundedSelection: false,
  readOnly: true,
  cursorStyle: "line",
  automaticLayout: true,
}

function JssOutputPanel({ className, value, }) {
  const classes = useStyles()


  return (
    <div className={className} >
      <h2 className={classes.title}>Output Jss</h2>
      <MonacoEditor
        height={350}
        language="css"
        theme="vs-dark"
        value={value}
        options={options}
      />
    </div>
  )
}

export default JssOutputPanel;
