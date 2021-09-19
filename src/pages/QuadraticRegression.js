import React, {Suspense, useState} from 'react';

const Sketch = React.lazy(() =>
  import('../components/QuadraticRegression/QrSketch'),
);

const QuadraticRegression = () => {
  const [clearPressed, setClearPressed] = useState(0);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <h2>Quadratic Regression</h2>
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

export default QuadraticRegression;
