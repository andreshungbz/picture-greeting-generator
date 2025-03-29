// Filename: main.js
// client-side script to demonstrate asynchronous programming with Promises

const image = document.querySelector('#image');
const greeting = document.querySelector('#greeting');
const author = document.querySelector('#author');
const generateBtn = document.querySelector('#generate-button');

const changePictureGreeting = async () => {
  const response = await fetch('/generate');
  const data = await response.json();

  image.setAttribute('src', data.imgPath);
  greeting.textContent = data.greeting.text;
  author.textContent = data.greeting.author;
};

generateBtn.addEventListener('click', changePictureGreeting);
