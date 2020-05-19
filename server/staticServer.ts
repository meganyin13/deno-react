import * as expressive from "https://raw.githubusercontent.com/NMathar/deno-express/master/mod.ts";

const port = 3000;
const app = new expressive.App();
app.use(expressive.static_("./public"));
app.use(expressive.bodyParser.json());
const server = await app.listen(port);
console.log("app listening on port " + server.port);
