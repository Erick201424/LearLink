import { MariaDBRepository } from "./repositories/mariaDBRepository";

import { CreateUserUseCase } from "../application/createUserUseCase";
import { CreateUserController } from "./controller/createUserController";

import { UpdateUserUseCase } from "../application/updateUserUseCase";
import { UpdateUserController } from "./controller/updateUserController";

import { GetUserByIdUseCase } from "../application/getUserByIdUseCase";
import { GetUserByIdController } from "./controller/getUserByIdController";

import { DeleteUserCaseUse } from "../application/deleteUserUseCase";
import { DeleteUserController } from "./controller/deleteUserController";

export const mariaDBRepository = new MariaDBRepository();

//Casos de uso
export const createUserUseCase = new CreateUserUseCase(mariaDBRepository);
export const updateUserUseCase = new UpdateUserUseCase(mariaDBRepository);
export const getByIdUserUseCase = new GetUserByIdUseCase(mariaDBRepository);
export const deleteUserUseCase = new DeleteUserCaseUse(mariaDBRepository);

//Controladores
export const createUserController = new CreateUserController(createUserUseCase);
export const updateUserController = new UpdateUserController(updateUserUseCase);
export const getUserByIdController = new GetUserByIdController(getByIdUserUseCase);
export const deleteUserController = new DeleteUserController(deleteUserUseCase);