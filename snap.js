const form = document.getElementById('loginForm');
const toggle = document.querySelector('.toggle');
const pwd = document.querySelector('input[name="password"]');
const user = document.querySelector('input[name="username"]');
const userErr = document.querySelector('.error[data-for="username"]');
const pwdErr = document.querySelector('.error[data-for="password"]');

toggle.addEventListener('click', () => {
  const showing = pwd.type === 'text';
  pwd.type = showing ? 'password' : 'text';
  toggle.textContent = showing ? 'Show' : 'Hide';
  toggle.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // simple validation
  let ok = true
