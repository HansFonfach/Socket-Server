const socketController = (socket) => { 

    console.log('Cliente conectado',socket.id) //Cuando el cliente se conecta, mando esta informacion

    socket.on('disconnect', () => { //cuando el cliente se desconecta, envio esta informacion
        console.log('cliente desconectado', socket.id);
    });


    socket.on('enviar-mensaje', (payload, callback) => { //socket= es el cliente conectado , payload contiene el cuerpo del mensaje , //aquí escucho cuando el cliente lo emite y lo escucho
        const id = 123456; //Este es el id que genera el mensaje
        callback(id); // el callback de la funcion, es la referencia a la funcion que tenemos en socket.emit de addeventlistener
        socket.broadcast.emit('enviar-mensaje', payload) //Aqui es cuando el servidor lo envia
    });




}

module.exports = {

    socketController
}