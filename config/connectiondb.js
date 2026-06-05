const mongoose = require("mongoose");

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOURI);

        console.log("MongoDB conectado");
    } catch (error) {
        console.error("Error de conexion:", error);
        process.exit(1);
    }
};

module.exports = conectarDB;