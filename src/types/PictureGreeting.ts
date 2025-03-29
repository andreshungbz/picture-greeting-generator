// Filename PictureGreeting.ts
// contains an image path and greeting data

import { Greeting } from './Greetings.js';

export interface PictureGreeting {
  imgPath: string;
  greeting: Greeting;
}
