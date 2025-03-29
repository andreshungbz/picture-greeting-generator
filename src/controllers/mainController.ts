// Filename: mainController.ts
// supplmentary pages to the application

import { Request, Response } from 'express';
import { getDaily } from '../models/mainModel.js';

export const getIndex = (_req: Request, res: Response) => {
  getDaily();
  res.render('index');
};
