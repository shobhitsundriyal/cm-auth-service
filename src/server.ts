import app from "./app";
import { Config } from "./config";
import logger from "./config/logger";

const startServer = () => {
  const PORT = Config.PORT;

  try {
    app.listen(PORT, () => {
      logger.info(
        `Server is running on port ${PORT} in ${Config.NODE_ENV} mode`
      );
    });
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1);
  }
};
startServer();
