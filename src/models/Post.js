import mongoose  from "mongoose";


const postSchema = new mongoose.Schema({
    titulo: {type:String, required: true},
    conteudo: {type: String, required:true},
    imgLink: {type:String},
    autor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
})

const Post = mongoose.model("post", postSchema)
export default Post