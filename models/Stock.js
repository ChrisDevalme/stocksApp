const { model, Schema } = require('mongoose')


const stockSchema = new Schema ({
    name: { required: true, type: String },
    symbol: { required: true, type: String },
    lastPrice: { required: true, type: Number },
    change: { required: true, type: Number },
    high: { required: true, type: Number },
    low: { required: true, type: Number },
    open: { required: true, type: Number },
}, {
    timestamps: true
})

const Stock = model('Stock', stockSchema)

module.exports = Stock