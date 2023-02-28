 const inputEl = document.querySelector('#validation-input');

 inputEl.addEventListener('blur', (event) => {
  event.currentTarget.classList.remove('valid', 'invalid')
Number(event.currentTarget.value.length) === Number(inputEl.dataset.length) ?
event.currentTarget.classList.add('valid') : 
event.currentTarget.classList.add('invalid')
 })

