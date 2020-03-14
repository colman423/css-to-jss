import React, { Fragment } from 'react';
import { createUseStyles } from 'react-jss'


function RadioOptions({ className, title, optionList, value, onChange }) {

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
