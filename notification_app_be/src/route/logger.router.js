import { Router } from "express";
import { get } from "../controller/notification.controller.js";

const router = Router();

router.route("/notifications").get(get);

export default router;