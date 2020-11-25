

const $inputsRange = Array.from(document.querySelectorAll('input[type="range"]'));
const $inputsColor = Array.from(document.querySelectorAll('input[type="color"]'));
const $inputSelect = document.querySelector('select');



const updateStyles = (e) => {
  let name = e.target.name;
  let value = e.target.value;
  let medida = e.target.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${name}`, value + medida);
}


$inputsColor.forEach(el => el.addEventListener('change', updateStyles));
$inputsRange.forEach(el => el.addEventListener('mousemove', updateStyles));
$inputSelect.addEventListener('change', updateStyles);

