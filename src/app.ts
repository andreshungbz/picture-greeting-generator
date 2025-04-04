// Filename: app.ts
// the Express.js server instance

import express from 'express';
import path from 'path';

import logger from './middleware/logger.js';
import missing from './middleware/missing.js';
import getLocalIPAddress from './utils/getLocalIPAddress.js';
import { generateAll } from './utils/generate.js';

import mainRoutes from './routes/mainRoute.js';

const app = express();
const PORT = 3000;

// EJS templating
app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));

// static folder
app.use(express.static(path.join(process.cwd(), 'public')));

// global middleware
app.use(logger); // log time and route of every request

// routes
app.use('/', mainRoutes);

// handle non-existent routes
app.use(missing);

// generate inital data object
export let data = generateAll();

// refresh data every 24 hours
setInterval(() => {
  data = generateAll();
  console.log('[PGG] Data regernated.');
}, 24 * 60 * 60 * 1000);

// start server
app.listen(PORT, () => {
  console.log(
    `[PGG] Picture Greeting Generator running at http://${getLocalIPAddress()}:${PORT}`
  );
});
