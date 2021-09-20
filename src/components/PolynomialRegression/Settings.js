/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import Typography from '../ui/Typography';
import {StyleSheet, css} from 'aphrodite';

const Settings = ({setSettings}) => {
  const [resolution, setResolution] = useState({x: 500, y: 500});
  const [degree, setDegree] = useState(3);

  return (
    <div className={css(styles.root)}>
      <Typography variant="t5">Settings</Typography>

      <div className={css(styles.inputContainer)}>
        Resolution (x,y) :
        <div className={css(styles.resContainer)}>
          <input
            type="number"
            value={resolution.x}
            onChange={e => {
              setResolution({...resolution, x: parseInt(e.target.value)});
            }}
          />

          <input
            type="number"
            value={resolution.y}
            onChange={e => {
              setResolution({...resolution, y: parseInt(e.target.value)});
            }}
          />
        </div>
      </div>

      <div className={css(styles.inputContainer)}>
        Polynomial Degree :
        <div className={css(styles.inputContainer)}>
          <input
            type="range"
            min="1"
            max="6"
            value={degree}
            onChange={e => {
              setDegree(parseInt(e.target.value));
            }}
          />

          <input type="number" value={degree} disabled />
        </div>
      </div>

      <button
        style={{marginTop: 30}}
        onClick={() => {
          setSettings({
            resolution: resolution,
            degree: degree,
          });
        }}>
        Apply
      </button>
    </div>
  );
};

const styles = StyleSheet.create({
  root: {
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
    margin: 'auto',
    marginTop: 50,
    maxWidth: 1000,
    padding: 10,
  },
  title: {},
  container: {
    width: '50%',
    margin: 'auto',
    marginTop: 50,
  },
  resContainer: {
    marginLeft: 20,
  },
  inputContainer: {
    display: 'flex',
    width: 'max-content',
    marginLeft: '30%',
    marginTop: 30,
  },
});

export default Settings;
