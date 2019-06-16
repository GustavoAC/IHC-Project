import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import colors from '../../assets/resources/colors';

const styles = {
  container: {
    position: 'relative',
    cursor: 'pointer',
    outline: 'none',
  },
  badgeDot: {
    position: 'absolute',
    display: 'inline',
    backgroundColor: colors.red,
    right: 0,
    top: 0,
    width: '7px',
    height: '7px',
    boxShadow: `0px 0px 0px 3px ${colors.black}`,
    borderRadius: '50%',
  },
  badgeText: {
    position: 'absolute',
    display: 'inline',
    backgroundColor: colors.red,
    left: 0,
    bottom: -2,
    fontSize: '12px',
    color: colors.white,
    padding: '1px 3px',
    borderRadius: '2px',
    boxShadow: `0px 0px 0px 2px ${colors.black}`,
    fontWeight: 'bold',
  },
};

const BadgeIcon = ({
  icon, badgeText, onClick, href, showBadge, badgeType,
}) => {
  const badge = badgeType === 'dot' ? (
    <div style={styles.badgeDot} />
  ) : (
    <div style={styles.badgeText}>{badgeText}</div>
  );
  const content = (
    <div>
      <IconButton icon={icon} type="transparentWhite" />
      {(badgeText || showBadge) && badge}
    </div>
  );
  if (href) {
    return (
      <a href={href} style={styles.container}>
        {content}
      </a>
    );
  }
  return (
    <div
      role="menuitem"
      style={styles.container}
      onClick={onClick}
      onKeyDown={() => {}}
      tabIndex="0"
    >
      {content}
    </div>
  );
};

BadgeIcon.propTypes = {
  icon: PropTypes.any.isRequired,
  badgeText: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string.isRequired,
  showBadge: PropTypes.bool.isRequired,
  badgeType: PropTypes.string.isRequired,
};

BadgeIcon.defaultProps = {
  badgeText: null,
  onClick: null,
};

export default BadgeIcon;
