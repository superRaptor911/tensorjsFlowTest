import React, {Suspense, useState} from 'react';
import Settings from '../components/PolynomialRegression/Settings';

const Sketch = React.lazy(() =>
  import('../components/PolynomialRegression/PrSketch'),
);

const PolynomialRegression = () => {
  const [clearPressed, setClearPressed] = useState(0);
  const [settings, setSettings] = useState({
    degree: 3,
    resolution: {x: 500, y: 500},
  });

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <h2>Polynomial Regression</h2>
        <Sketch clearPressed={clearPressed} settings={settings} />

        <button
          onClick={() => {
            setClearPressed(clearPressed + 1);
          }}>
          Clear Points
        </button>

        <Settings setSettings={setSettings} />
      </Suspense>
    </div>
  );
};

export default PolynomialRegression;
