import mongoose from "mongoose"

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  pages: {
    type: Number,
    min: 10,
    required: true
  },
  releaseDate: {
    type: Date,
    default: Date.now
  },
  poster: {
    type: String
  },
  tags: [String],
  price: {
    type: Number,
    default: 500,
  },
  ratings: [Number],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "author",
    default: null
  },
},
  {
    versionKey: false
  }
)


export default mongoose.model("book", BookSchema);
