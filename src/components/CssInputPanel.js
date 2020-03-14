import React from 'react';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root: {
  },
  textarea: {
    width: "100%",
    height: 300
  }
})


function CssInputPanel({value, onChange, ...props}) {
  console.log("CssInputPanel")
  const classes = useStyles()

  return (
    <textarea
      className={classes.textarea}
      value={value}
      onChange={(e) => onChange(e.target.value) }
      {...props}
    >
    </textarea>
  )
}

export default CssInputPanel;
