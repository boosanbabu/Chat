var mongoose = require('mongoose');

var Schema = mongoose.Schema;
const herokuurl =  "mongodb://heroku_hn2bx6fp:qdgmqic5vvv121bhmi0lfu7msl@ds151753.mlab.com:51753/heroku_hn2bx6fp";
const localurl = "mongodb://localhost:27017/chat";
mongoose.connect(process.env.MONGODB_URI || localurl);

mongoose.connection.on('open', function (ref) {
    console.log('Connected to mongo server.');
});
mongoose.connection.on('error', function (err) {
    console.log('Could not connect to mongo server!');
    console.log(err);
});

//mongoose.connect('mongodb://localhost/mongodb');

module.exports.user=mongoose.model('User',new Schema({
    name:String,
    handle: String,
    password: String,
    phone:String,
    email:String,
    friends:[]
},{strict: false}));
module.exports.online=mongoose.model('online',new Schema({
    handle:String,
    connection_id:String
}));
module.exports.messages=mongoose.model('message',new Schema({
    message : String,
    sender  : String,
    reciever: String,
    date    : Date
}));