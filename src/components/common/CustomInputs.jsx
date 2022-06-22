import React from "react";

export const CustomSimpleInput = ({
  label = "",
  name = "",
  value = "",
  placeholder = "",
  onChange = () => {},
  required = true,
}) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <div className="input-group">
      <input
        className="form-control"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  </div>
);

export const CustomInputAlt = ({
  label = "",
  name = "",
  value = "",
  placeholder = "",
  onChange = () => {},
  required = true,
}) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <div className="input-group input-group-alt">
      <input
        className="form-control"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  </div>
);
