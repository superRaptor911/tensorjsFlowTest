import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import PropTypes from 'prop-types';

const Modal = ({children, style, visible = false, setVisible}) => {
  return (
    <div
      className={css(styles.backdrop, visible ? styles.visible : styles.hidden)}
      onClick={() => {
        setVisible(false);
      }}>
      <div
        className={css(styles.content, style)}
        onClick={e => {
          e.stopPropagation();
        }}>
        {children}
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    position: 'fixed',
    zIndex: '1',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  hidden: {
    display: 'none',
  },
  visible: {
    display: 'flex',
  },
  content: {
    backgroundColor: '#fefefe',
    // margin: '15% auto',
    padding: '20px',
    border: '1px solid #888',
    width: '95%',
    margin: 'auto',
    maxWidth: 600,
    maxHeight: 600,
    overflowY: 'auto',
  },
});

Modal.propTypes = {
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
  style: PropTypes.object,
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
};

export default Modal;
