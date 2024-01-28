import mongoose from 'mongoose';


const Connection = () => {

    const MONGODB_URI = 'mongodb+srv://yadavsachchidanand18:jOpyL93PRJVlUNFR@cluster0.dj3rba0.mongodb.net/MyToDo?retryWrites=true&w=majority';

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('Database connected Successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('Database disconnected');
    })

    mongoose.connection.on('error', () => {
        console.log('Error while connecting with the database ', error.message);
    })
}

export default Connection;