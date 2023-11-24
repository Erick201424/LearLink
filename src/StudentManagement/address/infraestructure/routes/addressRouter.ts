import express, { Router } from "express"
import {
    createAddressController,
} from "../dependencies";

export const addressRouter = express.Router();

addressRouter.post("/", createAddressController.execute.bind(createAddressController));
// addressRouter.put("/:id", updateAddressController.update.bind(updateAddressController));
// addressRouter.get("/:id", getAddressByIdController.execute.bind(getAddressByIdController));
