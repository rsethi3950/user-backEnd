const mongoose = require('mongoose');

const Schema=mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: false
    },
    password:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
},{
        timestamps: true
});

const user=mongoose.model('user',userSchema);
module.exports=user;