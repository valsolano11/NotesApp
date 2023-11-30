import app from './app.js';
import { connectDB } from './mongodb.js';

// Profe todo lo que aparece comentado es para aprender, tanto trabajo me ha borrado cositas, perdon.

connectDB();
app.listen(8001, () => console.log(`Richi todo esta en el puerto del servidor 8001`));

/*Aqui vamos a colocar en puerto donde va correr el codigo
 y la conexion de la app donde vamos a tener la conexion con la base de datos*/

