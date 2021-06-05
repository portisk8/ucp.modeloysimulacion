import app from "./app";

async function init() {
  await app.listen(3000);
  console.log("Server on 3000");
}

init();
