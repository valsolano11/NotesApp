import mongoose from "mongoose";
/*Aqui vamos a conectar la base de datos
no cometer la bobada como yo de no prender
el mongodb xd
*/


export const connectDB= async () =>{
try {
    await mongoose.connect("mongodb://127.0.0.1/mernlogin");
    console.log(" Db conectada <3");
/*conexion de la base de datos y para que me muestre en 
consola que si se conecto */
} catch (error) {
    console.log(error)
}
}