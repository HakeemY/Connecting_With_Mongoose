import { Router } from "express";
import { createPerson, readAll } from "../controllers/person.controller.js";
const router = Router();

router.route("/person").get(readAll).post(createPerson);

export default router;
