// Lo que hacemos es importar las depencias para que funcione el codigo

import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import notasRoutes from './routes/notas.routes.js';


const app = express ();

app.use(express.json());
app.use(morgan('dev'));

app.use("/api", authRoutes);
app.use("/api", notasRoutes);
// rutas jeje 
/* El metodo get envía la información en la propia URL */
/* Esto lo utilizamos para el navbar  */

export default app; 