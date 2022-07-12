const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Schema.Types.ObjectId(),
    },
    reactionBody:{
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    } ,
    createdAt: {
      type: Date,
      default: Date.now,
    }
  }
);

// Schema to create Thought model
const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [ reactionSchema ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `upvoteCount` that gets the amount of comments per user
thoughtsSchema
.virtual('reactionCount')
// Getter
.get(function () {
  return `${this.reactions.length}`;
});

// Initialize our Post model
const Thoughts = model('thought', thoughtsSchema);

module.exports = Thoughts;
