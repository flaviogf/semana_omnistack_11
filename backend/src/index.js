import "dotenv/config";

import cors from "cors";
import debug from "debug";
import express from "express";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => debug("be-the-hero")("It's running at port 3333"));
