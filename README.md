# Picture Greeting Generator

A simple web application for the CMPS2212 GUI Programming course that demonstrates working with JavaScript Promises in asynchronous programming.

Picture Greeting Generator is an Express.js application that initally loads a data object containing image paths and greeting objects read from the `public/images` and `public/greetings` directories. It exposes two routes, `GET /` which gets a random image and greeting based soley on the date, and `GET /generate` which does the same but accounts for time up to the millisecond. You can easily extend more images and greetings by adding them to the respective directories.

Refer to the `public/scripts/main.js` to see see the demonstration of asynchronous programming using JavaScript Promises and the async/await syntax.

## Video Demonstration

A video demonstration of the application can be found on following [YouTube video link]().

## Running The Application

### Prerequisites

- `git` command line tool available
- Latest LTS version of [Node.js](https://nodejs.org/en) installed

### Steps

1. Clone the repository in the whichever directory you prefer on your system.

```
git clone https://github.com/andreshungbz/picture-greeting-generator.git
```

2. Change the directory to the project folder.

```
cd picture-greeting-generator
```

3. Install the Node.js project dependencies.

```
npm install
```

4. Run the following command:

```
npm run dev
```

This will start the development server, which keeps track of changes (in prodction you would run `npm start`). Take note of the address logged in the console and visit the application in the web browser at using that address and port. If you prefer, `http://localhost:3000` also works.

## Attributions

Favicon framed picture icon is copyright 2020 Twitter, Inc and other contributors. The graphics are licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/). No modifications were made to the original image.
