const express = require('express'); //npm i express
const cors = require('cors'); //npm i cors
const { socketController } = require('../sockets/controller');


class Server {

    constructor() {//Todo lo que se crea aqui se ejecuta cuando levanto el servidor express


        //Creando en el servidor la aplicacion de express
        this.app = express();
        this.port = process.env.PORT; //npm i dotenv
        this.server = require('http').createServer(this.app); //le mando mi aplicacion de express
        this.io = require('socket.io')(this.server); //en io está t


        //Middlewares
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();

        //Sockets

        this.sockets();
    }



    //un middleware es una funcion que se ejecuta  antes de llamar a un controlador o seguir con otra ejecucion
    middlewares() {
        //Cors
        this.app.use(cors());

        //directorio publico
        this.app.use(express.static('public'));

    }


    //En este metodo irán las rutas
    routes() {
        // this.app.use('/api/auth', require('../routes/auth'));

    }

    sockets() {
        this.io.on('connection',socketController)


    }


    listen() {
        this.server.listen(this.port)
    }

}

module.exports = Server;