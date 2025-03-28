// Filename: mainController.ts
// supplmentary pages to the application

import { Request, Response } from 'express';

export const getIndex = (_req: Request, res: Response) => {
  res.render('index');
};
