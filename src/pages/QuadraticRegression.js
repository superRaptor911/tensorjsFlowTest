import React, {Suspense} from 'react';

const Sketch = React.lazy(() =>
  import('../components/QuadraticRegression/QrSketch'),
);

const QuadraticRegression = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <h2>Quadratic Regression</h2>
        <Sketch />
      </Suspense>
    </div>
  );
};

export default QuadraticRegression;
