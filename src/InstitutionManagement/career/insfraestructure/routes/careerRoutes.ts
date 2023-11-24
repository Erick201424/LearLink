import express, { Router } from "express";
import {
    createCareerController,
    getByIdCareerController,
    getAllCareersController,
    updateCareerController
} from "../dependencies";

export const careerRouter = Router();

careerRouter.post('/', createCareerController.execute.bind(createCareerController));
careerRouter.get('/:id', getByIdCareerController.execute.bind(getByIdCareerController));
careerRouter.get('/', getAllCareersController.execute.bind(getAllCareersController));
careerRouter.put('/:id', updateCareerController.execute.bind(updateCareerController));