import { User } from "../domain/entities/user";
import { UserRepository } from "../domain/repositories/userRepository";
import { UpdateUserValidation } from "../domain/validations/userValidation";
import { validate } from "class-validator";

export class UpdateUserUseCase {
    constructor(readonly userRepository: UserRepository) { }

    async update(
        id: number,
        email: string,
        password: string,
    ): Promise<User | null> {
        const userValidator = new UpdateUserValidation(id, email, password);
        const userValidate = await validate(userValidator);

        if (userValidate.length > 0) {
            throw new Error(JSON.stringify(userValidate));
        }

        try {
            const updatedUser = await this.userRepository.updateUser(
                id,
                email,
                password
            );
            return updatedUser;
        } catch (error) {
            return null;
        }
    }
}