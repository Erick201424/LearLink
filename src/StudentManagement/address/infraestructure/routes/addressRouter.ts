import express from "express"
import {
    createAddressController,
    updateAddressController,
    getAddressByIdController
} from "../dependencies";

export const addressRouter = express.Router();

addressRouter.post("/", createAddressController.create.bind(createAddressController));
addressRouter.put("/:id", updateAddressController.update.bind(updateAddressController));
addressRouter.get("/:id", getAddressByIdController.getById.bind(getAddressByIdController));
