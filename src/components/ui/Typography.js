import React from 'react';
import PropTypes from 'prop-types';

const Typography = ({
  children,
  variant = 't1',
  className = '',
  style = null,
}) => {
  return (
    <p className={`${variant} ${className}`} style={style}>
      {children}
    </p>
  );
};

Typography.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.oneOf(['t1', 't2', 't3', 't4', 't5', 't6']),
  className: PropTypes.string,
  style: PropTypes.object,
};
export default Typography;
