/*
    AGREGAR TODAS LAS TABLAS NECESARIAS PARA PODER INICIALIZAR EL SISTEMA
    1 USUARIO POR DEFECTO QUE SEA ADMIN
*//*
    AGREGAR TODAS LAS TABLAS NECESARIAS PARA PODER INICIALIZAR EL SISTEMA
    1 USUARIO POR DEFECTO QUE SEA ADMIN
*/

-- CREATE DATABASE IF NOT EXISTS linkerdb_test;

-- USE linkerdb_test;

CREATE TABLE users (
   id int NOT NULL AUTO_INCREMENT primary key,
   email varchar(255) NOT NULL,
   password  varchar(255) NOT NULL,
   status VARCHAR(45) NOT NULL
);

CREATE TABLE address(
    id INT AUTO_INCREMENT PRIMARY KEY,
    mainStreet VARCHAR(255) NOT NULL,
    street1 VARCHAR(255),
    street2 VARCHAR(255),
    zipCode INT,
    municipality VARCHAR(255),
    state VARCHAR(255),
    country VARCHAR(255),
    status VARCHAR(45) NOT NULL
);

CREATE TABLE institution (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    career VARCHAR(255) NOT NULL,
    education_level VARCHAR(100) NOT NULL,
    school_cycle VARCHAR(100) NOT NULL,
    address_id INT,
    status VARCHAR(45) NOT NULL,
    FOREIGN KEY (address_id) REFERENCES address (id)
);


CREATE TABLE students(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    lastname VARCHAR(45) NOT NULL,
    phone BIGINT NOT NULL,
    gender VARCHAR (45) NOT NULL,
    id_address INT NOT NULL,
    id_user INT NOT NULL,
    id_institution INT NOT NULL,
    status VARCHAR(45) NOT NULL,
    FOREIGN KEY (id_user) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (id_address) REFERENCES address(id) ON DELETE CASCADE,
    FOREIGN KEY (id_institution) REFERENCES institution(id) ON DELETE CASCADE
);


-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
-- Ejemplo de llenado para hacer pruebas si alguien las ocupa

-- Inserciones para la tabla users
INSERT INTO users (email, password, status) VALUES
  ('201424@ids.upchiapas.edu.mx', 'passwordSafe_1', 'Active'),
  ('201425@ids.upchiapas.edu.mx', 'passwordSafe_2', 'Active'),
  ('kikin_1998@hotmail.com', 'passwordSafe_3', 'Active');

-- Inserciones para la tabla address
INSERT INTO address (mainStreet, street1, street2, zipCode, municipality, state, country, status) VALUES 
('Main Street 1', 'Street 1-1', 'Street 1-2', 29150, 'Suchiapa', 'Chiapas', 'México', 'Active'),
('Main Street 2', 'Street 2-1', 'Street 2-2', 54321, 'Tuxtla Gutierrez', 'Chiapas', 'México', 'Active'),
('Main Street 3', 'Street 3-1', 'Street 3-2', 12345, 'Huixtla', 'Chiapas', 'México', 'Active');

-- Inserciones para la tabla institution
INSERT INTO institution (name, career, education_level, school_cycle, address_id, status) VALUES 
('Universidad Politécnica de Chiapas', 'Ingeniería en Software', 'Universidad', 'Cuatrimestral', 1, 'Active'),
('UNACH', 'Arquitecuta', 'Universidad', 'Semestral', 2, 'Active'),
('Preparatoria Alberto C. Culebro', 'S/N', 'Preparatoria', 'Trimestral', 2, 'Active');

-- Inserciones para la tabla students
INSERT INTO students (name, lastname, phone, gender, id_address, id_user, id_institution, status) VALUES 
('Erick', 'Díaz', 9613304787, 'Male', 1, 1, 1, 'Active'),
('Alberto', 'Vazquez', 987654321, 'Male', 2, 2, 2, 'Active'),
('Alejandra', 'Escobaar', 987654322, 'Female', 3, 3, 3, 'Active');


  
  