const express = require('express');
const app = express();

app.set('port', 3000);
app.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
});

const mysql = require('mysql');

// Establecer los parámetros de la conexión
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hojadehielo',
    database: 'mibase1'
});

// Nos conectamos a la base
connection.connect(err => {
    if (err) throw err;
    console.log('Conectado a la base de datos!');
});

// Agregar un nuevo registro
connection.query('INSERT INTO cliente VALUES (1,"Fernando", 1 ,154, "hola mundo vives")', (error, resultados) => {
    if (error) throw error;
    console.log("Insertado:", resultados);
});

// Consultar la tabla
connection.query('SELECT * FROM cliente', (error, filas) => {
    if (error) throw error;
    console.log("Consulta 1:", filas);
});

// Modificar un registro
connection.query('UPDATE cliente SET genero = 0, telefono = 1664 WHERE identificador = 1', (error, resultados) => {
    if (error) throw error;
    console.log("Actualizado:", resultados);
});

// Consultar la tabla nuevamente
connection.query('SELECT * FROM cliente', (error, filas) => {
    if (error) throw error;
    console.log("Consulta 2:", filas);
});

// Eliminar un registro
connection.query('DELETE FROM cliente WHERE identificador = 1', (error, resultado) => {
    if (error) throw error;
    console.log("Eliminado:", resultado);
});

// Última consulta
connection.query('SELECT * FROM cliente', (error, filas) => {
    if (error) throw error;
    console.log("Consulta final:", filas);
});

// Cerrar la conexión
connection.end();
