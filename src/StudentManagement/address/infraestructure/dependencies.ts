import { MariaDBRepository } from "./repositories/mariaDBRepository";

import { CreateAddressUseCase } from "../application/createAddresssUseCase";
import { CreateAddressController } from "./controller/createAddressController";

// // import { UpdateAdressUseCase } from "../application/updateAddressUseCase";
// // import { UpdateAdressController } from "./controller/updateAddressController";

// import { GetAddressByIdUseCase } from "../application/getAddressByIdUseCase";
// import { GetAddressByIdController } from "./controller/getAddressByIdController";

export const mariaDBRepository = new MariaDBRepository();

// //Casos de uso
export const createAddressUseCase = new CreateAddressUseCase(mariaDBRepository);
// // export const updateAddressUseCase = new UpdateAdressUseCase(mariaDBRepository);
// export const getAddressByIdUseCase = new GetAddressByIdUseCase(mariaDBRepository);

// //Controladores
export const createAddressController = new CreateAddressController(createAddressUseCase);
// // export const updateAddressController = new UpdateAdressController(updateAddressUseCase);
// export const getAddressByIdController = new GetAddressByIdController(getAddressByIdUseCase);