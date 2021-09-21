import * as tf from '@tensorflow/tfjs';
import {map} from '../../Utility';

let a, b, c;
let curve = [];
const learningRate = 0.08;
const optimiser = tf.train.adam(learningRate);

let SCREEN_XSIZE = 500;
let SCREEN_YSIZE = 500;

export function init(res_x, res_y) {
  a = tf.variable(tf.scalar(Math.random()));
  b = tf.variable(tf.scalar(Math.random()));
  c = tf.variable(tf.scalar(Math.random()));

  SCREEN_XSIZE = res_x;
  SCREEN_YSIZE = res_y;
}

function predict(xs) {
  const ys = xs.square().mul(a).add(xs.mul(b)).add(c);
  return ys;
}

function loss(pred, labels) {
  return pred.sub(labels).square().mean();
}

export function run(xs, ys) {
  if (xs.length < 1) {
    return;
  }

  tf.tidy(() => {
    const tfxs = tf.tensor1d(xs);
    const tfys = tf.tensor1d(ys);

    optimiser.minimize(() => {
      return loss(predict(tfxs), tfys);
    });
  });
}

export function getCurve() {
  let xs = [];

  for (let i = 0; i < 1; i += 1.0 / SCREEN_XSIZE) {
    xs.push(i);
  }

  tf.tidy(() => {
    const tfxs = tf.tensor1d(xs);
    const tfys = predict(tfxs);

    tfys.data().then(ys => {
      curve = [];
      for (let i = 0; i < xs.length; i++) {
        const xScreen = map(xs[i], 1, 0, SCREEN_XSIZE);
        const yScreen = map(ys[i], 1, SCREEN_YSIZE, 0);
        curve.push([xScreen, yScreen]);
      }
    });
  });

  return curve;
}

export function getMemoryUsage() {
  return tf.memory().numBytes;
}

export async function profile() {
  const profileInfo = await tf.profile(() => {
    init();
    run([0], [0]);
    getCurve();
  });

  return profileInfo;
}
