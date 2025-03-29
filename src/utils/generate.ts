// Filename: generate.ts
// utility function that recursively retrieves image file paths and greeting data

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import random from 'random';

import { Greeting } from '../types/Greetings.js';
import { PictureGreeting } from '../types/PictureGreeting.js';
import { PictureGreetingData } from '../types/PictureGreetingData.js';

import { data } from '../app.js';

// project root
const PROJECTROOT = path.resolve(process.cwd());

// function to read from the public images and greetings folders and return a global data object
export const generateAll = (): PictureGreetingData => {
  // get the image file path strings
  const imagesDirectory = path.join(PROJECTROOT, 'public/images');
  const imageRelativePaths = readRecursively(imagesDirectory).map((absPath) => {
    return `/images/${path.relative(imagesDirectory, absPath)}`;
  });

  // get the json objects

  const greetingsDirectory = path.join(PROJECTROOT, 'public/greetings');
  const jsonPaths = readRecursively(greetingsDirectory);

  // since the json files are stored as an array of objects, first get the arrays
  const jsonDataArrays: Greeting[][] = jsonPaths.map((path) => {
    const raw = fs.readFileSync(path, 'utf-8');
    return JSON.parse(raw) as Greeting[];
  });

  // flatten the array
  const jsonData: Greeting[] = jsonDataArrays.flat();

  return { imagePaths: imageRelativePaths, greetings: jsonData };
};

// function to generate the daily picture and greeting
export const generatePictureGreeting = (
  daily: boolean = false
): PictureGreeting => {
  // use the date and time for seeding PRNG
  let today = new Date().toISOString();

  // for daily, just create a hash from the date (e.g., "2025-03-28")
  if (daily) {
    today = today.split('T')[0];
  }

  // create a hash from the date to use as a seed, and create a generator
  const seed = crypto.createHash('sha256').update(today).digest('hex');
  const rand = random.clone(seed);

  // select the random image path and greeting
  const iIndex = rand.int(0, data.imagePaths.length - 1);
  const gIndex = rand.int(0, data.greetings.length - 1);

  return {
    imgPath: data.imagePaths[iIndex],
    greeting: data.greetings[gIndex],
  };
};

// helper function to read files in a folder recursively and return an array of the absolute paths
function readRecursively(directory: string): string[] {
  let results: string[] = [];
  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      results = results.concat(readRecursively(filePath));
    } else {
      results.push(filePath);
    }
  });

  return results;
}
