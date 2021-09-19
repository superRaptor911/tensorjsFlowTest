import React from 'react';
import PropTypes from 'prop-types';
import {css} from 'aphrodite';

const Input = ({
  value,
  setValue,
  placeholder,
  style,
  className = null,
  type,
  name,
  children,
}) => {
  return (
    <input
      placeholder={placeholder}
      className={className == null ? css(style) : className}
      value={value}
      type={type}
      name={name}
      onChange={e => {
        setValue(e.target.value);
      }}>
      {children}
    </input>
  );
};

Input.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
      ]),
    ),
  ]),
  value: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.any,
  setValue: PropTypes.func,
};

export default Input;
