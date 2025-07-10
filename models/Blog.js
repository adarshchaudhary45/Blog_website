const mongoose=require('mongoose')
const BlogSchema = new mongoose.Schema({
    
      content: {
        type: String,
        required: true
      }
})
let Blog = mongoose.model('Blog' , BlogSchema);
module.exports = Blog;