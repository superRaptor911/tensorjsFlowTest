import * as tf from '@tensorflow/tfjs';
import {map} from '../../Utility';

let m, b;
const learningRate = 0.2;
const optimiser = tf.train.sgd(learningRate);

export function init() {
  m = tf.variable(tf.scalar(Math.random()));
  b = tf.variable(tf.scalar(Math.random()));
}

function predict(xs) {
  const ys = xs.mul(m).add(b);
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

export function getLine() {
  let x1, y1, x2, y2;

  tf.tidy(() => {
    const xs = [0, 1];
    const tfxs = tf.tensor1d(xs);

    const tfys = predict(tfxs);
    const ys = tfys.dataSync();

    x1 = 0;
    y1 = map(ys[0], 1, 500, 0);

    x2 = 500;
    y2 = map(ys[1], 1, 500, 0);
  });

  return [x1, y1, x2, y2];
}

export function getMemoryUsage() {
  return tf.memory().numBytes;
}

export async function profile() {
  const profileInfo = await tf.profile(() => {
    init();
    run([0], [0]);
    getLine();
  });

  return profileInfo;
}
