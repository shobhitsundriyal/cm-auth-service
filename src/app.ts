import express, { NextFunction, Request, Response } from "express";
import logger from "./config/logger";
import { HttpError } from "http-errors";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to auth service in docker");
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
