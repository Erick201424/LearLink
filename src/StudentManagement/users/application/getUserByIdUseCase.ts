import { User } from "../domain/entities/user";
import { UserRepository } from "../domain/repositories/userRepository";
import { GetByIdUserValidation } from "../domain/validations/userValidation";
import { validate } from "class-validator";

export class GetUserByIdUseCase {
    constructor(readonly userRepository: UserRepository) { }

    async getById(
        id: number
    ): Promise<User | null> {
        const userValidator = new GetByIdUserValidation(id);
        const userValidate = await validate(userValidator);

        if (userValidate.length > 0) {
            throw new Error(JSON.stringify(userValidate));
        }

        try {
            const gotUserById = await this.userRepository.getUserById(id);
            return gotUserById;
        } catch (error) {
            return null;
        }
    }
}