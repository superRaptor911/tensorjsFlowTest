import React from 'react';
// import * as tf from '@tensorflow/tfjs';
import './App.css';
import OurSketch from './OurSketch';

function App() {
  // const values = [];
  // for (let i = 0; i < 15; i++) {
  //   values.push(Math.random() % 100);
  // }

  // const data = tf.tensor2d(values, [3, 5]);

  return (
    <div className="App">
      <p>our sketch</p>

      <OurSketch />
      {/* <div>tensor = {data.toString()}</div> */}
      {/* <p>Memory usage: {tf.memory().numBytes}B</p> */}
    </div>
  );
}

export default App;
