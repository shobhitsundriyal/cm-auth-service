import app from "./app";
import { Config } from "./config";

const startServer = () => {
  const port = Config.PORT;

  try {
    app.listen(port, () => {
      console.log(
        `Server is running on port ${port} in ${Config.NODE_ENV} mode`
      );
    });
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1);
  }
};
startServer();
