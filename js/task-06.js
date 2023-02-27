 const inputEl = document.querySelector('#validation-input');

 inputEl.addEventListener('blur', (event) => {
event.currentTarget.value.length == inputEl.dataset.length ?
event.currentTarget.classList.add('valid') : 
event.currentTarget.classList.add('invalid')
 })

