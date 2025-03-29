// Filename: mainController.ts
// supplmentary pages to the application

import { Request, Response } from 'express';
import { getDaily, getRandom } from '../models/mainModel.js';

export const renderIndex = (_req: Request, res: Response) => {
  res.render('index', getDaily());
};

export const retrieveRandom = (_req: Request, res: Response) => {
  res.json(getRandom());
};
