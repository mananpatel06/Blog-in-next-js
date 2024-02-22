import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        min:3,
        max:20
    },
    email:{
        type:String,
        required:true,
        unique:true,
        max:50
    },
    password:{
        type:String,
        required:true,
        min:6
    },
    img:{
        type:String,
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{timestamps:true}
);

const postSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    img:{
        type:String,
    },
    userId:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true,
        unique:true,
    },
},{timestamps:true}
);

// checking if useris already in mongo db atlas otherwise create new user
export const User = mongoose.models?.User || mongoose.model("User",userSchema);

export const Post = mongoose.models?.Post || mongoose.model("Post",postSchema);