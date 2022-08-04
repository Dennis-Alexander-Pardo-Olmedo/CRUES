

const express = require('express');
const { query } = require('../mysql');
const router = express.Router();

const mysqlConnection  = require('../mysql');

router.get('/' , (req, res) => {
    mysqlConnection.query('SELECT * FROM  USUARIO;', (err, rows, fields) => {
      if(!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });  
  });

    router.get('/:Id', (req, res) => {
   
      const { Id }=req.params;
      mysqlConnection.query('SELECT * FROM  USUARIO WHERE Id=?',[Id],(err, rows, fields) => {
        if(!err) {
          res.json(rows[0]);
        } else {
          console.log(err);
        }
      });
    
    })
    ;

    router.post('/', (req, res) => {
      const {Id,Nombre,Direccion}=req.body;
      console.log(Id,Nombre,Direccion);
      const INSERTAR =`  CALL SP_STOREDUSER(?, ?, ?)`;
      mysqlConnection.query(INSERTAR, [Id,Nombre,Direccion],(err, rows, fields) => {
        if(!err) {
          res.json(rows[0]);
        } else {
          console.log(err);
        }  
      
    });
    router.put('/:Id', (req, res) => {
      const { Nombre, Direccion } = req.body;
      const {Id } = req.params;
      const ACTUALIZAR = `
        SET @Id = ?;
        SET @Nombre = ?;
        SET @Direccion = ?;
        CALL SP_STOREDUSER(@Id, @Nombre, @Direccion);
      `;
      mysqlConnection.query(ACTUALIZAR , [Id, Nombre, Direccion], (err, rows, fields) => {
        if(!err) {
          res.json({status: 'actualizada'});
        } else {
          console.log(err);
        }
      });



      
    });

    router.delete('/:Id', (req, res) => {
      const { Id } = req.params;
      mysqlConnection.query('DELETE FROM USUARIO WHERE Id = ?', [Id], (err, rows, fields) => {
        if(!err) {
          res.json({status : 'USUARIO Borrado'});
        } else {
          console.log(err);
        }
      });
    });
       
   
    
    });


module.exports = router;