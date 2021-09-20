import React, {Suspense, useState} from 'react';

const Sketch = React.lazy(() =>
  import('../components/PolynomialRegression/PrSketch'),
);

const PolynomialRegression = () => {
  const [clearPressed, setClearPressed] = useState(0);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <h2>Polynomial Regression</h2>
        <Sketch clearPressed={clearPressed} />

        <button
          onClick={() => {
            setClearPressed(clearPressed + 1);
          }}>
          Clear Points
        </button>
      </Suspense>
    </div>
  );
};

export default PolynomialRegression;
