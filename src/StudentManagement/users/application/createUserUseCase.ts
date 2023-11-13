import { User } from '../domain/entities/user';
import { UserRepository } from '../domain/repositories/userRepository';
import { CreateUserValidation } from '../domain/validations/userValidation';
import { validate } from "class-validator";

export class CreateUserUseCase {
    constructor(readonly userRepository: UserRepository) { }

    async create(
        email: string,
        password: string,
    ): Promise<User | null> {

        const userValidator = new CreateUserValidation(email, password);
        const userValidate = await validate(userValidator);

        if (userValidate.length > 0) {
            throw new Error(JSON.stringify(userValidate));
        }

        try {
            const createdUser = await this.userRepository.createUser(
                email,
                password
            );

            return createdUser;
        } catch (error) {
            return null;
        }
    }
}
