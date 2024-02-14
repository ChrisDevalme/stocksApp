const express = require('express')
const router = express.Router()
const stockCrtl = require('../../controllers/api/stockCrtl')

// Index incomplete
router.get('/', stockCrtl.indexNotComplete, stockCrtl.jsonStocks)
// Index complete
router.get('/completed', stockCrtl.indexComplete, stockCrtl.jsonStocks)
// Delete
router.delete('/:id', stockCrtl.destroy, stockCrtl.jsonStock)
// Update
router.put('/:id', stockCrtl.update, stockCrtl.jsonStock)
// Create
router.post('/', stockCrtl.create, stockCrtl.jsonStock)
// Show
router.get('/:id', stockCrtl.show, stockCrtl.jsonStock)

module.exports = router