import { User } from "../domain/entities/user";
import { UserRepository } from "../domain/repositories/userRepository";
import { GetByIdUserValidation } from "../domain/validations/userValidation";
import { validate } from "class-validator";

export class DeleteUserCaseUse {
    constructor(readonly userRepository: UserRepository) { }

    async delete(
        id: number
    ): Promise<boolean> {
        const userValidator = new GetByIdUserValidation(id)
        const userValidate = await validate(userValidator)

        if (userValidate.length > 0) {
            throw new Error(JSON.stringify(userValidate));
        }

        try {
            const deletedUser = await this.userRepository.deleteUser(id);

            if (deletedUser) {
                return true;
            } else {
                throw new Error(`No se pudo eliminar el usuario con el ID ${id}.`);
            }
        } catch (error) {
            throw Error;
        }
    }

}