import express from "express";

import IncidentsController from "./controllers/IncidentsController";
import OngController from "./controllers/OngController";
import ProfileController from "./controllers/ProfileController";
import SessionController from "./controllers/SessionsController";

const routes = express.Router();

routes.get("/incidents", IncidentsController.index);
routes.post("/incidents", IncidentsController.store);
routes.delete("/incidents/:id", IncidentsController.destroy);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.store);

routes.get("/profile", ProfileController.index);

routes.post("/session", SessionController.store);

export default routes;
