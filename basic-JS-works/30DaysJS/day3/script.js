const spacingInput = document.querySelector('#spacing');
const blurInput = document.querySelector('#blur');
const baseColorInput = document.querySelector('#base');
const image = document.getElementById("img");
const inputs = document.querySelectorAll('.controls input');



function handleUpdate(){
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

inputs.forEach(input => input.addEventListener('click', handleUpdate));
inputs.forEach(input => input.addEventListener('change', handleUpdate));

