import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  display: 'flex',
};

const Div = ({
  children, maxWidth, justifyContent, style = {}, className, onClick, id,
}) => {
  if (onClick) {
    return (
      <div
        id={id}
        style={{
          ...styles,
          maxWidth,
          justifyContent,
          ...style,
        }}
        className={className}
        onClick={onClick}
        onKeyDown={() => {}}
        role="button"
        tabIndex={0}
      >
        {children}
      </div>
    );
  } return (
    <div
      id={id}
      style={{
        ...styles,
        maxWidth,
        justifyContent,
        ...style,
      }}
      className={className}
    >
      {children}
    </div>
  );
};
Div.defaultProps = {
  justifyContent: 'flex-start',
  className: '',
  style: {},
  maxWidth: null,
  onClick: null,
  id: null,
  children: null,
};

Div.propTypes = {
  children: PropTypes.any,
  maxWidth: PropTypes.string,
  justifyContent: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  onClick: PropTypes.func,
  id: PropTypes.string,
};

export default Div;
