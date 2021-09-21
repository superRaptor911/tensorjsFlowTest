/* eslint-disable react/prop-types */
import React, {useEffect} from 'react';
import {ReactP5Wrapper} from 'react-p5-wrapper';
import {getCurve, getMemoryUsage, init, run} from './quadraticRegression';
import {map} from '../../Utility';
import {getFPS, getMouseLocation} from '../../common/p5Util';

let xs = [];
let ys = [];
let fps = 0;

const clearPoints = () => {
  xs = [];
  ys = [];
};

const sketch = p5 => {
  p5.setup = () => {
    return p5.createCanvas(500, 500);
  };

  p5.mousePressed = event => {
    const pos = getMouseLocation(p5, event);
    if (pos) {
      const x = map(pos.x, 500, 0, 1);
      const y = map(pos.y, 500, 1, 0);
      xs.push(x);
      ys.push(y);
    }
  };

  p5.draw = () => {
    p5.background(0);
    p5.stroke(255);
    p5.strokeWeight(6);
    for (let i = 0; i < xs.length; i++) {
      const x = map(xs[i], 1, 0, 500);
      const y = map(ys[i], 1, 500, 0);
      p5.point(x, y);
    }

    p5.strokeWeight(2);
    const curve = getCurve();

    p5.beginShape();
    p5.noFill();
    for (let i = 0; i < curve.length; i++) {
      p5.vertex(curve[i][0], curve[i][1]);
    }
    p5.endShape();

    p5.strokeWeight(1);
    p5.fill(255);
    p5.text(`Memory Usage : ${getMemoryUsage()} Bytes`, 10, 30);
    p5.text(`Fps : ${fps}`, 10, 50);

    getFPS(p5).then(f => {
      fps = f;
    });

    run(xs, ys);
  };
};

const LrSketch = ({clearPressed}) => {
  useEffect(() => {
    init(500, 500);
  }, []);

  useEffect(() => {
    clearPoints();
  }, [clearPressed]);

  return <ReactP5Wrapper sketch={sketch} />;
};

export default LrSketch;
