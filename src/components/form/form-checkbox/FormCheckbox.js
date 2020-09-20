import React from 'react';

const Checkbox = ({ label, selected, onChange }) => {

  const handleChange = (event) => {
    const { checked } = event.target;
    onChange(checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          className='mr-2'
          value={selected}
          defaultChecked={selected}
          onChange={handleChange} />

        {label}
      </label>
    </div>
  );
};

export default Checkbox;
