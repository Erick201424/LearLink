import express from "express";
import {
    createUserController,
    updateUserController,
    getUserByIdController,
    deleteUserController
} from "../dependencies";

export const userRouter = express.Router();

userRouter.post("/", createUserController.create.bind(createUserController));
userRouter.put("/:id", updateUserController.update.bind(updateUserController));
userRouter.get("/:id", getUserByIdController.getById.bind(getUserByIdController));
userRouter.delete("/:id", deleteUserController.delete.bind(deleteUserController));
