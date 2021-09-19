/* eslint-disable no-unused-vars */
import React, {Suspense} from 'react';

const Sketch = React.lazy(() =>
  import('../components/LinearRegression/LrSketch'),
);

const LinearRegression = () => {
  console.log(Sketch);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <h2>Linear Regression</h2>
        <Sketch />
      </Suspense>
    </div>
  );
};

export default LinearRegression;
