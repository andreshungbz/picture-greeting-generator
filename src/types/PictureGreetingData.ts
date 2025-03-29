// Filename PictureGreetingData.ts
// contains list of relative image paths and Greetings

import { Greeting } from './Greetings.js';

export interface PictureGreetingData {
  imagePaths: string[];
  greetings: Greeting[];
}
