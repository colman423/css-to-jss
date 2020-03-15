import React, { useCallback } from 'react';
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
  readOnly: false,
  cursorStyle: "line",
  automaticLayout: true,
  formatOnPaste: true
}

function CssInputPanel({ className, value, onChange }) {
  const classes = useStyles()

  const editorDidMount = useCallback((editor) => {
  //   editor.addCommand(
  //     monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter,
  //     () => {
  //     },
  //   )
    editor.focus()
    editor.setSelection({
      endLineNumber: 100,
      endColumn: 1,
      startColumn: 1,
      startLineNumber: 1
    })
  }, [])

  return (
    <div className={className}>
      <h2 className={classes.title}>Input Css</h2>
      <MonacoEditor
      height={350}
        language="css"
        theme="vs-dark"
        value={value}
        options={options}
        onChange={(newValue) => onChange(newValue)}
        editorDidMount={editorDidMount}
      />
    </div>
  )
}

export default CssInputPanel;
