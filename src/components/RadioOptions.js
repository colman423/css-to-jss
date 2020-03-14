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


function RadioOptions({ className, title, optionList, value, onChange, ...props }) {

  return (
    <div className={className}>
      <div>{title}</div>
      {
        Object.values(optionList).map(item => (
          <Fragment key={item}>
            <label>
              <input
                type="radio"
                value={item}
                checked={value === item}
                onChange={onChange}
              />
              {item}
            </label>
            <br />
          </Fragment>
        ))
      }
    </div>
  )
}

export default RadioOptions;
