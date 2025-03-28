// Filename: missing.ts
// middleware to handle any non-existing routes; returns a 404 message

import { Request, Response } from 'express';

const missing = (_req: Request, res: Response) => {
  res.status(404).send('Page Not Found');
};

export default missing;
