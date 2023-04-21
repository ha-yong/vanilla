const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('input');
const greetting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'userName';

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value.trim();
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreeting();
}

function paintGreeting() {
    const userName = localStorage.getItem(USERNAME_KEY);
    greetting.textContent = `Hello ${userName}`;
    greetting.classList.remove(HIDDEN_CLASSNAME);
}

//loginInput.addEventListener('submit',onLoginSubmit);

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit',onLoginSubmit);
}else{
    paintGreeting();
}