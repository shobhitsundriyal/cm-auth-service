import express, { NextFunction, Request, Response } from "express";
import logger from "./config/logger";
import createHttpError, { HttpError } from "http-errors";

const app = express();

app.get("/", (req, res, next) => {
  const err = createHttpError(401, "Unauthorized access");
  //throw err; //this fails (not caught by error handler) in case this cb is async (also server will crash out) which in most case it would be. rather use next(err) to pass the error to the global error handler

  next(err);
  res.send("Welcome to auth service");
});

// global error handler, should be the last middleware
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message);

  const status = err.status || 500;
  const message = err.message || "Internal server error";

  res.status(status).json({
    errors: [
      {
        type: err.name,
        msg: message,
        path: "",
        location: "",
      },
    ],
  });
});

export default app;
