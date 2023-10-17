const refs = {
  form: document.querySelector('.js-form'),
};

refs.form.elements.message.value = localStorage.getItem('TextFeedback') ?? '';
refs.form.elements.userName.value = localStorage.getItem('UserName') ?? '';

refs.form.addEventListener('input', onInputText);

function onInputText(evt) {
  const inputName = evt.currentTarget.userName.value;
  localStorage.setItem('UserName', inputName);

  const inputMessage = evt.currentTarget.message.value;
  localStorage.setItem('TextFeedback', inputMessage);
}

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.clear();
}
