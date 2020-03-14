import React, { useCallback, Fragment } from 'react';
import { createUseStyles } from 'react-jss'
import { NAMING_STYLE, QUOTE } from '../css-to-jss/constant';
import { merge } from 'lodash';

const useStyles = createUseStyles({
  root: {
    display: 'flex'
  },
  item: {
    flex: '1 1'
  },
})


function CheckboxOptions({ className, title, label, value, onChange, ...props }) {

  return (
    <div className={className}>
      <div>{title}</div>
      <label>
        <input
          type="checkbox"
          value={value}
          checked={value}
          onChange={onChange}
        />
        {label || title}
      </label>
    </div>
  )
}

export default CheckboxOptions;
