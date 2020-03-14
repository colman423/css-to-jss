import React from 'react';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  root: {
  },
  textarea: {
    width: "100%"
  }
})


function OptionPanel(props) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <textarea className={classes.textarea}>
        {props.css}
      </textarea>
    </div>
  )
}

export default OptionPanel;
