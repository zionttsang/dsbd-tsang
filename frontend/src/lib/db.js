import mongoose from "mongoose"

const t66ySchema = new mongoose.Schema(
  {
    likeCount: {
      type: Number,
      required: false
    },

    title: {
      type: String,
      required: false
    },

    link: {
      type: String,
      require: false
    },
    date: {
      type: String,
      required: false
    },
    joinDate: {
      type: Date,
      default: Date.now()
    },
  },
  {
    collection: 't66y',
  },
  { strict: true },
  { strictQuery: false }
);

export const T66Y = mongoose.models.T66Y || mongoose.model('T66Y', t66ySchema);