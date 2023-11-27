import throttle from "lodash.throttle";

const FEEDBACK_FORM_STATE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('submit', formSubmit);
form.addEventListener('input', throttle(formInput, 500));

let messgForm = JSON.parse(localStorage.getItem(FEEDBACK_FORM_STATE_KEY)) || {};
const { email, message } = form.elements;
populateMessage();

function formInput() {
    messgForm = { email: email.value, message: message.value };
    localStorage.setItem(FEEDBACK_FORM_STATE_KEY, JSON.stringify(messgForm));
}
  
function formSubmit(evt) {
    evt.preventDefault();
    console.log({ email: email.value, message: message.value });
  
    localStorage.removeItem(FEEDBACK_FORM_STATE_KEY);
    evt.currentTarget.reset();
}
  
function populateMessage() {
    if (messgForm) {
      email.value = messgForm.email || '';
      message.value = messgForm.message || '';
    }
}
 
