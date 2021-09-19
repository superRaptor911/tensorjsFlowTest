import React, {useState} from 'react';
import {StyleSheet, css} from 'aphrodite';
import {COLORS} from '../../styles/COLORS';
import PropTypes from 'prop-types';
import {useAuth} from '../AuthProvider';
import Typography from './Typography';
import StatusBar from '../StatusBar';

const SidebarMobile = ({
  children,
  items = [],
  selectedIndex,
  setSelectedIndex,
}) => {
  const user = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={css(styles.container)}>
      <StatusBar user={user} setShowMenu={setShowMenu} showMenu={showMenu} />
      {/* show menu if menu button pressed */}
      {showMenu && (
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
                setShowMenu(false);
              }}>
              <Typography variant="t3">{item}</Typography>
            </div>
          ))}
        </div>
      )}
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
  container: {
    display: 'block',
  },
  root: {
    width: '100%',
    backgroundColor: COLORS.bg2,
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

SidebarMobile.propTypes = {
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
export default SidebarMobile;
