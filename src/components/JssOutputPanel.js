import React, { useMemo } from 'react';
import { createUseStyles } from 'react-jss'
import MonacoEditor from 'react-monaco-editor';

const useStyles = createUseStyles({
  root: {
  },
  textarea: {
    width: "100%",
    height: 300
  }
})


function JssOutputPanel({ value, onChange, ...props }) {
  // console.log("JssOutputPanel")
  const classes = useStyles()

  const options = useMemo(() => ({
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: true,
    cursorStyle: "line",
    automaticLayout: true,
  }), [])

  return (
    <div className={classes.textarea} {...props}>
      <MonacoEditor
        language="css"
        theme="vs-dark"
        value={value}
        options={options}
      />
    </div>
  )
}

export default JssOutputPanel;
