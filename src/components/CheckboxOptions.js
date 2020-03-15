import React from 'react';

function CheckboxOptions({ className, title, label, value, onChange }) {

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
