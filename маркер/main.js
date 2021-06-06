const coords = [];
const container = document.querySelector('.container-image');

container.addEventListener('click', e => {
  const point = e.target.closest('.container-point');

  if (point) return removePoint(point);

  const x = e.offsetX;
  const y = e.offsetY;

  coords.push({
    x: x,
    y: y
  });
  container.appendChild(createPoint(x, y));

  console.log(coords);
}, false);

const createPoint = (x, y) => {
  const node = document.createElement('div');

  node.classList.add('container-point');

  node.style.left = `${x}px`;
  node.style.top = `${y}px`;

  return node;
}

const removePoint = (node) => {
  const index = [...container.children].indexOf(node) - 1;

  coords.splice(index, 1);

  node.remove();

  console.log(coords);
}