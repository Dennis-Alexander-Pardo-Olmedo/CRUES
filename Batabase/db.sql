CREATE DATABASE CRUED;
USE CRUED;

CREATE TABLE USUARIO(
    Id int(11) ,
    Cedula varchar(40) ,
    Nombre varchar(40) ,
    Direccion varchar(40),
    Telefono  int,
    primary key (Id)
);
DESCRIBE USUARIO;
insert USUARIO (Id, Cedula, Nombre,Direccion,Telefono)VALUES (0,'0','juan','ecua', 20000);
insert USUARIO (Id, Cedula, Nombre,Direccion,Telefono)VALUES (1,'1','Carlos','ecua', 20000);
insert USUARIO (Id, Cedula, Nombre,Direccion,Telefono)VALUES (2,'2','Luis','ecua', 20000);
insert USUARIO (Id, Cedula, Nombre,Direccion,Telefono)VALUES (3,'3','felipe','ecua', 20000);
