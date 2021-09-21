/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import {ReactP5Wrapper} from 'react-p5-wrapper';
import {getLine, getMemoryUsage, init, run} from './linearRegression';
import {map} from '../../Utility';

let xs = [];
let ys = [];

const sketch = p5 => {
  p5.setup = () => {
    return p5.createCanvas(500, 500);
  };

  p5.mousePressed = event => {
    console.log([event.offsetX, event.offsetY]);
    const x = map(event.offsetX, 500, 0, 1);
    const y = map(event.offsetY, 500, 1, 0);
    xs.push(x);
    ys.push(y);
  };

  p5.draw = () => {
    p5.background(0);
    p5.textFont('Georgia');
    p5.stroke(255);
    p5.strokeWeight(6);
    for (let i = 0; i < xs.length; i++) {
      const x = map(xs[i], 1, 0, 500);
      const y = map(ys[i], 1, 500, 0);
      p5.point(x, y);
    }

    p5.strokeWeight(2);
    const line = getLine();
    p5.line(line[0], line[1], line[2], line[3]);

    p5.strokeWeight(1);
    p5.fill(255);
    p5.text(`Memory Usage : ${getMemoryUsage()} Bytes`, 10, 30);

    run(xs, ys);
  };
};

const LrSketch = () => {
  useEffect(() => {
    init();
  }, []);

  return <ReactP5Wrapper sketch={sketch} />;
};

export default LrSketch;
