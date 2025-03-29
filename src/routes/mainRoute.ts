// Filename: mainRoute.ts
// routes of the application

import express from 'express';
import { renderIndex, retrieveRandom } from '../controllers/mainController.js';

const mainRoutes = express.Router();

// main page
mainRoutes.get('/', renderIndex);
mainRoutes.get('/generate', retrieveRandom);

export default mainRoutes;
