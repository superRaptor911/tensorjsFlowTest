export function map(val, max, from, to) {
  let norm = (val / max) * (to - from) + from;
  return norm;
}
export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
