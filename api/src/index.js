import app from "./app";

async function init() {
  await app.listen(3600);
  console.log("Server on 3600");
}

init();
