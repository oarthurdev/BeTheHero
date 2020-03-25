import { Router } from "express";
import OngsController from "./controllers/OngsController";
import IncidentsController from "./controllers/IncidentsController";

const routes = Router();

routes.get("/ongs", OngsController.index);
routes.post("/ongs", OngsController.store);

routes.post("/incidents", IncidentsController.store);

export default routes;
