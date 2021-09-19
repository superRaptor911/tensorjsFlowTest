import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {COLORS} from '../../styles/COLORS';
import PropTypes from 'prop-types';
import {useAuth} from '../AuthProvider';
import Typography from './Typography';
import StatusBar from '../StatusBar';

const Sidebar = ({children, items = [], selectedIndex, setSelectedIndex}) => {
  const user = useAuth();

  if (user) {
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.root)}>
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
          <StatusBar user={user} />
          <div className={css(styles.space)} />
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
  }

  return {children};
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  space: {
    height: 20,
  },
  root: {
    width: '20%',
    maxWidth: 350,
    backgroundColor: COLORS.bg2,
    height: '100vh',
    overflow: 'auto',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
  },
  child: {
    width: '100%',
    height: '100%',
  },
  items: {
    paddingLeft: 5,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    borderBottomStyle: 'solid',
    paddingTop: 10,
    paddingBottom: 10,
  },
  selectedItem: {
    backgroundColor: COLORS.primary,
  },
  visible: {
    display: 'block',
  },
  hidden: {
    display: 'none',
  },
});

Sidebar.propTypes = {
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
export default Sidebar;
