const mongoose = require('mongoose');


const dbConecction = async () => {

    try {
    
        await mongoose.connect(process.env.DB_CNN);

        console.log('DB online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar la BD')
    }

}

module.exports = {
    dbConecction
}