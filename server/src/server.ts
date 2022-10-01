import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import express, { Request, Response } from 'express';
import 'express-async-errors';
import logger from 'jet-logger';
import envVars from '@shared/env-vars';
import StatusCodes from "http-status-codes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser(envVars.cookieProps.secret));

// Show routes called in console during development
if (envVars.nodeEnv === 'development') {
  app.use(morgan('dev'));
}

// Security
if (envVars.nodeEnv === 'production') {
  app.use(helmet());
}


// app.use('/api', BaseRouter);

// Setup error handler
app.use((
  err: Error,
  _: Request,
  res: Response,
) => {
  logger.err(err, true);

  return res.status(StatusCodes.BAD_REQUEST).json({
    error: err.message,
  });
});

export default app;
