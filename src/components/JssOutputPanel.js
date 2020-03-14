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


function JssOutputPanel({value, onChange, ...props}) {
  console.log("JssOutputPanel")
  const classes = useStyles()

  return (
    <textarea
      className={classes.textarea}
      value={value}
      readOnly
      {...props}
    >
    </textarea>
  )
}

export default JssOutputPanel;
