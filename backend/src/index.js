import debug from "debug";
import app from "./app";

app.listen(3333, () => debug("be-the-hero")("It's running at port 3333"));
