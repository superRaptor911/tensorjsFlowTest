import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import PropTypes from 'prop-types';
import Typography from './Typography';
import {COLORS} from '../../styles/COLORS';

const Tabs = ({children, items = [], selectedIndex, setSelectedIndex}) => {
  return (
    <div className={css(styles.root)}>
      <div className={css(styles.tabContainer)}>
        {items.map((item, id) => (
          <div
            key={id}
            className={css(
              styles.items,
              selectedIndex === id && styles.selectedItem,
            )}
            onClick={() => {
              setSelectedIndex(id);
            }}>
            <Typography variant="t3">{item}</Typography>
          </div>
        ))}
      </div>

      <div className={css(styles.child)}>
        {children.map((item, id) => (
          <div
            key={id}
            className={css(
              id === selectedIndex ? styles.visible : styles.hidden,
            )}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 20,
  },
  tabContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: COLORS.bg2,
    padding: 5,
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    marginBottom: 30,
  },
  items: {
    flex: 1,
  },
  selectedItem: {
    backgroundColor: COLORS.bg3,
    flex: 1,
    textAlign: 'center',
  },
  visible: {
    display: 'block',
  },
  hidden: {
    display: 'none',
  },
  child: {},
});

Tabs.propTypes = {
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
  items: PropTypes.array,
  selectedIndex: PropTypes.number.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
};

export default Tabs;
