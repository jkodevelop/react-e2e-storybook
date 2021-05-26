import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

/**
 * Primary UI component for user interaction
 */
function Button({ selected, size, label, ...props }){
  const cssNames = selected ? 'btn selected': 'btn';
  return (
    <button
      type="button"
      className={cssNames}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this button selected?
   */
  selected: PropTypes.bool,
  /**
   * Button contents/label
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  selected: false,
  onClick: undefined,
};

export default Button;