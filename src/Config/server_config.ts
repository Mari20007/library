import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import checkDatabaseConnection from './db_health_check';

// Cargar las variables de entorno desde .env
dotenv.config();

const app = express();

// Habilitar CORS para todas las rutas
app.use(
  cors({
    origin: process.env.CORS_ORIGIN, //solo de esta de esra ruta puedo recibir las peticiones
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', //que tipo de parametros puede ser
    allowedHeaders: ['Content-Type', 'Authorization'],//si o si todas tiene que llevar eso
    credentials: true, //puedo aceptar cookies
  }),
);

// Habilitar el manejo de JSON
app.use(express.json());
checkDatabaseConnection()
  .then(() => {
    const PORT: string | number = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.info(`Servidor corriendo en el puerto http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error(
      'No se pudo iniciar el servidor debido a un error en la base de datos:',
      error,
    );
  });
export default app;