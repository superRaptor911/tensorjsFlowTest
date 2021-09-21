export function getMouseLocation(p5, event) {
  if (event.type === 'mousedown') {
    if (
      p5.mouseX > 0 &&
      p5.mouseX < p5.width &&
      p5.mouseY > 0 &&
      p5.mouseY < p5.height
    ) {
      return {x: p5.mouseX, y: p5.mouseY};
    }
  }
  return null;
}
