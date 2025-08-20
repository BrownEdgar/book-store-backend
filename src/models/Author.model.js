import mongoose from 'mongoose'

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  country: String,
  books: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "book",
    default: []
  },
  avatar: {
    type: String,
  }
});

authorSchema.index({ name: 1 })
const Author = mongoose.model("author", authorSchema);
export default Author;
