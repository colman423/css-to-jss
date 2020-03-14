import React, { useMemo, useCallback, useEffect, useRef } from 'react';
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


function CssInputPanel({ value, onChange, ...props }) {
  // console.log("CssInputPanel")
  const classes = useStyles()

  const options = useMemo(() => ({
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: "line",
    automaticLayout: true,
    formatOnPaste: true
  }), [])

  const editorDidMount = useCallback((editor, monaco) => {
  //   console.log(monaco.KeyCode, monaco)
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
    <div className={classes.textarea} {...props}>
      <MonacoEditor
        language="css"
        theme="vs-dark"
        value={value}
        options={options}
        onChange={(newValue, e) => onChange(newValue)}
        editorDidMount={editorDidMount}
      />
    </div>
  )
}

export default CssInputPanel;
