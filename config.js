


//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//Base de datos

let urlDB;

if ( process.env.NODE_ENV === 'dev'){
    urlDB = `mongodb://localhost:27017/cafe`;
} else {
    urlDB = `mongodb+srv://briandevitaok:${process.env.MONGO_DB_PASS || 12345}@development.jwaya24.mongodb.net/?retryWrites=true&w=majority` 
}


module.exports = urlDB;

