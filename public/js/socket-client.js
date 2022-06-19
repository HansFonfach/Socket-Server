//Referencia del HTML

const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');


const socket = io();


socket.on('connect', () => {

   // console.log('Conectado al servidor');

    lblOffline.style.display = 'none'; //Si está online, esto no se verá
    lblOnline.style.display = '';
}); //el on es para escuchar un evento, esta función es como un event listener

socket.on('disconnect', () => {

    //console.log('Desconectado del servidor');

    lblOnline.style.display = 'none'; //cuando me desconecto, este no se ve
    lblOffline.style.display = ''; //Este si se ve
});

btnEnviar.addEventListener('click', () => {

    const mensaje = txtMensaje.value;

    const payload = {
        mensaje,
        id: 'ABC123',
        fecha: new Date().getTime()
    } // se crea un objeto porque podemos enviar varias cosas.

    socket.emit('enviar-mensaje', payload, (id) =>{
        console.log('Desde el server', id)
    });


});

socket.on('enviar-mensaje', (payload)=>{

    const mensajeRecibido = payload;
    console.log(mensajeRecibido);

})  //Voy a escuchar el evento enviar mensaje