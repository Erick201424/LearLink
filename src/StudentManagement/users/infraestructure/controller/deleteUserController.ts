import { Request, Response } from "express";
import { DeleteUserCaseUse } from "../../application/deleteUserUseCase";

export class DeleteUserController {
    constructor(readonly deleteUserUseCase: DeleteUserCaseUse) { }

    async delete(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id, 10);

            const deleteUser = await this.deleteUserUseCase.delete(id);

            if (deleteUser) {
                return res.status(200).send({
                    status: "success",
                    data: {
                        Category: deleteUser,
                        message: "Category deleted successfully"
                    }
                });
            } else {
                return res.status(500).send({
                    status: "error",
                    message: "An error occurred while adding the publication."
                });
            }
        } catch (error) {
            if (error instanceof Error) {
                if (error.message.startsWith('[')) {
                    return res.status(400).send({
                        status: "error",
                        message: "Validation failed",
                        errors: JSON.parse(error.message)
                    });
                }
            }
            return res.status(500).send({
                status: "error",
                message: "An error occurred while fetching the book."
            });
        }
    }
}