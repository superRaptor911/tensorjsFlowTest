import React from 'react';
import Typography from '../components/ui/Typography';
import {StyleSheet, css} from 'aphrodite';
import {Link} from 'react-router-dom';
import {ROUTES} from '../Routes';

const MainPage = () => {
  return (
    <div className={css(styles.root)}>
      <Typography variant="t6">TensorflowJS Demos</Typography>

      <div className={css(styles.container)}>
        <Typography variant="t3" style={{textAlign: 'left'}}>
          <Link to={ROUTES.LINEAR_REGRESSION.path}>* Linear Regression</Link>
        </Typography>
        <Typography variant="t3" style={{textAlign: 'left'}}>
          * Linear Regression
        </Typography>
      </div>
    </div>
  );
};
const styles = StyleSheet.create({
  root: {
    padding: 20,
  },
  container: {
    width: '50%',
    margin: 'auto',
    marginTop: 50,
  },
});

export default MainPage;
