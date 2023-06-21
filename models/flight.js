const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema ({
    airline: {type: String, 
        enum: ['American', 'Southwest', 'United',],
        required: true,
    },
    airport: {type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN',
        required: true,
    },
    flightNo: {type: Number,
        min: 10,
        max: 1000,
        required: true,
    },
    departs: {type: Date, 
        default: function (){
            const oneYearFromNow = new Date();
            oneYearFromNow.setFullYear(oneYearFromNow.getFullYear()+1)
            return oneYearFromNow;

        },
    },
});

module.exports = mongoose.model('Flight', flightSchema);