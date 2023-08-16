const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      unique: true,
    },
    lastName: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/, 'Must use a valid email address'],
    },
    country: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        match: [/^(?:\+61|0)[4578]([0-9]{8})$/, 'Must use a valid phone number'],
    },
    enquiries: [{
        type: String,
    }],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.virtual('enquiryCount').get(function () {
  return this.enquiries.length;
});

const User = model('User', userSchema);

module.exports = User;