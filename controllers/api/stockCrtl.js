const Stock = require('../../models/Stock')


module.exports = {
    create,
    indexComplete,
    indexNotComplete,
    show,
    update,
    destroy,
    jsonStocks,
    jsonStock
}

// jsonTodos jsonTodo
// viewControllers

function jsonStock (_, res) {
    res.json(res.locals.data.stock)
}

function jsonStocks (_, res) {
    res.json(res.locals.data.stocks)
}

/****** C - Create *******/
async function create(req, res, next){
    try {
        const stock = await Stock.create(req.body)
        console.log(stock)
        res.locals.data.stock = stock
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

/****** R - Read *****/

async function indexComplete(_, res ,next) {
    try {
        const stocks = await Stock.find({ completed: true })
        res.locals.data.stocks = stocks
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

async function indexNotComplete(_ ,res,next) {
    try {
        const stocks = await Stock.find({ completed: false })
        res.locals.data.stocks = stocks
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


async function show(req ,res,next) {
    try {
        const stock = await Stock.findById(req.params.id)
        res.locals.data.stock = stock
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}


/****** U - Update *****/


async function update(req ,res,next) {
    try {
        const stock = await Stock.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.locals.data.stock = stock
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

/***** D - destroy/delete *****/

async function destroy(req ,res,next) {
    try {
        const stock = await Stock.findByIdAndDelete(req.params.id)
        res.locals.data.stock = stock
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
