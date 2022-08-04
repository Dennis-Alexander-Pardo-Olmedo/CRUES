USE CRUED;
DELIMITER $$
USE `CRUED`$$
create procedure `SP_STOREDUSER`(
	IN _Id int(11),
      IN _Nombre varchar(40) ,
    IN _Direccion varchar(40)
)
BEGIN 
  IF _Id = 0 THEN
    INSERT INTO USUARIO (Nombre, Direccion)
    VALUES (_Nombre, _Direccion);

    SET _Id = LAST_INSERT_ID();
  ELSE
    UPDATE USUARIO 
    SET
    Nombre = _Nombre,
    Direccion = _Direccion
    WHERE Id = _Id;
  END IF;

  SELECT _Id AS 'Id';
END
    
    
    

    
    
    
 