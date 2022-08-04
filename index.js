/*const http = require('http');*/



/*Ajustes*/ 
const express = require('express');
const expre = express();
expre.set('port', process.env.PORT || 3000);

expre.use(express.json());

// Routes
expre.use(require('./rotas/rutas.js')) 

// Starting the server
expre.listen(expre.get('port'), () => {
  console.log(`Server on port ${expre.get('port')}`);
});
/*
/*Api*
/*//*
const handleServer = function( req,res){
    res.writeHead(200,{'Content-type': 'text/html' });
    res.write('<h1> hola mundo dennis</h1>');
    res.end();
}   
/*
const server = http.createServer(handleServer);

server.listen(3800 , function(){
    console.log('Server on port  3800' .cyan);
});
*/