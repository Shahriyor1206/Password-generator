let btn = document.querySelector('#btn');

const randomPassword = () => {
  let inp = document.querySelector('#inp');
  let passwordLength = +document.querySelector('#passwordLength').value;
  let error = document.querySelector('#error');
  let password = '';
  let characters =
    'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789~`!@#$%^&*()_+={}/*-[];:"<>,.?';

  if (passwordLength === 0) {
    error.innerHTML = 'Please Select Password Length';
    error.style.color = 'red';
  }

  for (let i = 0; i < passwordLength; i++) {
    password =
      password + characters[Math.floor(Math.random() * characters.length)];
  }

  inp.value = password;
};

btn.addEventListener('click', randomPassword);
