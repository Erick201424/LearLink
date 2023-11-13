import express from 'express';
import { Signale } from 'signale';
import dotenv from 'dotenv';

import { createTables } from './database/mariadb';
import { userRouter } from './StudentManagement/users/infraestructure/routes/userRouter';
import { addressRouter } from './StudentManagement/address/infraestructure/routes/addressRouter';

dotenv.config();

const app = express();
const signale = new Signale();
app.use(express.json());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/address', addressRouter)

const PORT = process.env.PORT || 3000;

createTables().then((tablesCreated) => {
    if (tablesCreated) {
        signale.success("Las tablas han sido creadas exitosamente");
    } else {
        signale.success("Las tablas ya existen");
    }
});

app.listen(PORT, () => {
    signale.success(`Server online in port ${PORT}`);
});