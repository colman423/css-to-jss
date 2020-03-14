import React, { useCallback } from 'react';
import { createUseStyles } from 'react-jss'
import { NAMING_STYLE, QUOTE } from '../css-to-jss/constant';
import { merge } from 'lodash';
import RadioOptions from './RadioOptions';
import CheckboxOptions from './CheckboxOptions';

const useStyles = createUseStyles({
  root: {
    display: 'flex'
  },
  item: {
    flex: '1 1'
  },
})


function OptionPanel({ options, onChange, ...props }) {
  console.log("OptionPanel", options)
  const classes = useStyles()

  const handleChange = useCallback((changeData) => {
    onChange(
      merge(
        {},
        options,
        changeData
      )
    )
  }, [options, onChange])

  const handleMinifyChange = useCallback(e => {
    handleChange({
      minify: e.target.checked
    })
  }, [handleChange])
  const handleSelectorStyleChange = useCallback((e) => {
    handleChange({
      selector: {
        style: e.target.value
      }
    })
  }, [handleChange])

  const handleQuoteChange = useCallback((e) => {
    handleChange({
      quote: e.target.value
    })
  }, [handleChange])

  return (
    <div className={classes.root}>

      <RadioOptions
        className={classes.item}
        title="selector style"
        optionList={NAMING_STYLE}
        value={options.selector.style}
        onChange={handleSelectorStyleChange}
      />

      <RadioOptions
        className={classes.item}
        title="selector quote style"
        optionList={QUOTE}
        value={options.quote}
        onChange={handleQuoteChange}
      />

      <CheckboxOptions
        className={classes.item}
        title="minify"
        label="minify"
        value={options.minify}
        onChange={handleMinifyChange}
      />

    </div>
  )
}

export default OptionPanel;
