// Filename: mainRoute.ts
// routes of the application

import express from 'express';
import { getIndex } from '../controllers/mainController.js';

const mainRoutes = express.Router();

// main page
mainRoutes.get('/', getIndex);

export default mainRoutes;
