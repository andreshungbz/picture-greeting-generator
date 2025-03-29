// Filename: mainController.ts
// supplmentary pages to the application

import { Request, Response } from 'express';
import { getDaily, getRandom } from '../models/mainModel.js';

export const renderIndex = (_req: Request, res: Response) => {
  console.log(getDaily());
  res.render('index');
};

export const retrieveRandom = (_req: Request, res: Response) => {
  res.json(getRandom());
};
