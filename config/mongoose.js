const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/codeial_development');
const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to MongoDb"));
db.once('open',function(){
    console.log('Connected to mongoDb');
});

module.exports=db;