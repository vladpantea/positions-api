const express = require('express');
const Middleware = require('./middleware/middleware');
const dotenv = require('dotenv');
const ErrorHandlingMiddleware = require('./middleware/error-handler');

dotenv.config();

const app = express();
Middleware(app);

const PositionsController = require('./controllers/positions-controller');
app.use('/api/positions', PositionsController);

ErrorHandlingMiddleware(app);

module.exports = app;