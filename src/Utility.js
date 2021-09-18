export function map(val, max, from, to) {
  let norm = (val / max) * (to - from) + from;
  return norm;
}
