import { User } from "../entities/user";

export interface UserRepository {
    createUser(
        email: string,
        password: string
    ): Promise<User | null>;

    updateUser(
        id: number,
        email: string,
        password: string
    ): Promise<User | null>;

    getUserById(
        id: number
    ): Promise<User | null>;

    deleteUser(
        id: number,
    ): Promise<boolean>;

}