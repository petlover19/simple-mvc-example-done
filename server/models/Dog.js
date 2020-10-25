const mongoose = require('mongoose');

let DogModel = {};

const DogSchema = new mongoose.Schema({
    dogName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        default: "Lupo"
    },
    breed: {
        type: String,
        required: true,
        default: "Labradoodle"
    },
    age: {
        type: Number,
        required: true,
        default: 2
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