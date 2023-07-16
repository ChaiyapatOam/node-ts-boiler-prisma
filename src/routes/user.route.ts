import express, { Express, Router } from "express";
const router: Router = express.Router();
import * as userController from "@/controller/user.controller";

router
  .route("/")
  .get(userController.test)

export const userRoute: Router = router;
