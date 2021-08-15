const form = document.querySelector('form');
const formControl =  document.querySelector('.form-control');
const inputs = document.querySelectorAll('input');

form.addEventListener( 'submit', (e) => {
  e.preventDefault();
  const arrayInputs =  Array.from(inputs);
  const emailInput = arrayInputs[2];

    arrayInputs.forEach((item, i) => {
    let inputValue = item.value.trim();

    if(inputValue === ''){
      item.parentElement.className = 'form-control error'
      item.placeholder = '';
    }else{
      item.parentElement.className = 'form-control success'
    }
  });

  if(emailInput.value){
  checkEmail(emailInput);
}
})

function checkEmail(emailInput){
  let inputValue = emailInput.value.trim();
  const regExTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(!regExTest.test(inputValue)){
    emailInput.value = '';
    emailInput.placeholder = 'email@example/com';
    emailInput.parentElement.className = 'form-control email-error';
    console.log('error');
  }else{
    emailInput.parentElement.className = 'form-control success';
  }
}
