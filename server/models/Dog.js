const mongoose = require('mongoose');

let DogModel = {};

const DogSchema = new mongoose.Schema({
    dogName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },

    breed: {
        type: String,
        required: true,
    },

    age: {
        type: Number,
        required: true,
    },

    createdDate: {
        type: Date,
        default: Date.now,
    },

});

DogSchema.statics.findByDog = (name, callback) => {
    const search = {
        name,
    };

    return DogModel.findOne(search, callback);
};

DogModel = mongoose.model('Dog', DogSchema);

// export our public properties
module.exports.DogModel = DogModel;
module.exports.DogSchema = DogSchema;