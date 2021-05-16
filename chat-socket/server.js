const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origins: ["http://localhost:4200"],
  },
});

const chat = [];

//Evento que se invoca cuando un cliente abre una conexion al socket.
io.on("connection", (socket) => {
  //Evento para escribir mensajes en el chat.
  socket.on("writeChat", (mensaje) => {
    //Agregamos el mensaje al chat
    chat.push(mensaje);
    //Se envía todo el chat a los que están conectados
    io.emit("chat", chat);
  });
  //Evento para leer mensajes en el chat.
  socket.on("readChat", () => {
    //Se envía todo el chat a los que están conectados
    io.emit("chat", chat);
  });
  //Cada vez que un cliente abre una conexion al socket, se envia todo el contenido del chat.
  io.emit("chat", chat);
});

http.listen(8585);
console.log("El servidor esta corriendo en el puerto 8585...");
