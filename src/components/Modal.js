import React from 'react';
import PropTypes from 'prop-types';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Div from './Div';
import IconButton from './IconButton';

import colors from '../../assets/resources/colors';

const styles = {
  overlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px',
    margin: '0px',
    left: '0px',
    top: '0px',
    width: '100%',
    height: '100%',
    backgroundColor: colors.blacktransparent,
    position: 'fixed',
    zIndex: 102,
  },
};

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <Div style={styles.overlay}>
        <Div
          style={{
            backgroundColor: colors.white,
            padding: '60px',
            paddingTop: '0',
            borderRadius: '4px',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 10px',
          }}
        >
          <Div style={{ marginLeft: 'auto' }}>
            <IconButton
              type="transparent"
              icon={faTimes}
              iconColor={colors.gray}
              onClick={handleClose}
            />
          </Div>
          {children}
        </Div>
      </Div>
    </div>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
};

export default Modal;
