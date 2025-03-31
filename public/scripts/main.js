// Filename: main.js
// client-side script to demonstrate asynchronous programming with Promises

const image = document.querySelector('#image');
const greeting = document.querySelector('#greeting');
const author = document.querySelector('#author');
const generateBtn = document.querySelector('#generate-button');

// version using async/await syntax
const changePictureGreeting = async () => {
  try {
    const response = await fetch('/generate');
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    image.setAttribute('src', data.imgPath);
    greeting.textContent = data.greeting.text;
    author.textContent = data.greeting.author;
  } catch (err) {
    console.error(err);
  }
};

// version using Promise chaining
const changePictureGreetingChain = () => {
  fetch('/generate')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      return response.json();
    })
    .then((data) => {
      image.setAttribute('src', data.imgPath);
      greeting.textContent = data.greeting.text;
      author.textContent = data.greeting.author;
    })
    .catch((err) => console.log(err));
};

generateBtn.addEventListener('click', changePictureGreeting);
