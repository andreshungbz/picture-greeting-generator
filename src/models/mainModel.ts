// Filename: mainModel.ts
// application models for retrieving data

import { PictureGreeting } from '../types/PictureGreeting.js';
import { generatePictureGreeting } from '../utils/generate.js';

export const getDaily = (): PictureGreeting => {
  return generatePictureGreeting(true);
};

export const getRandom = (): PictureGreeting => {
  return generatePictureGreeting();
};
