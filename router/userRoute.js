import express from "express";
import { create, deleteUser, fetch, update } from "../controller/userController.js";

const route = express.Router();  

route.get("/qrcode", fetch);
route.post("/qrcode", create);
route.put("/qrcode/:id", update);
route.delete("/qrcode/:id", deleteUser);

export default route;
