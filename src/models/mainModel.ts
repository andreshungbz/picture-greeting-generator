// Filename: mainModel.ts
// application models for retrieving data

import { generateDaily } from '../utils/generate.js';

// import { PictureGreeting } from '../types/PictureGreeting.js';

// function to get the PictureGreeting of the day
export const getDaily = () => {
  console.log(generateDaily());
};
