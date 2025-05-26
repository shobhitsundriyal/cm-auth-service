import { Config } from "./config";

function welcomeMessage(name: string) {
  const user = { name: "shobit" };
  const user2 = { name: "shobit" };

  console.log("welcome ", user.name);
}

welcomeMessage("Yoyoy");
console.log(Config.PORT);
