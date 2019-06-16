import React from 'react';
import PropTypes from 'prop-types';
import colors from '../../assets/resources/colors';

const Link = ({
  children, href, color, style,
}) => {
  const ownStyle = { color, textDecoration: 'none', cursor: 'pointer' };

  return (
    <a style={{ ...ownStyle, ...style }} href={href}>
      {children}
    </a>
  );
};

Link.propTypes = {
  color: PropTypes.string,
  href: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  style: PropTypes.any,
};

Link.defaultProps = {
  color: colors.red,
  style: {},
};

export default Link;
