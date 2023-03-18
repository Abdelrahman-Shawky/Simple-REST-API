const router = require('express').Router();
const Subscriber = require('../models/subsriber');

// Get All
router.get('/', async (req, res) => {
    try{
        const subscribers = await Subscriber.find()
        res.json(subscribers);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
});
// Get One
router.get('/:id', (req, res) => {

});
// Create One
router.post('/', (req, res) => {

});
// Update One
router.patch('/:id', (req, res) => {

});
// Delete One
router.delete('/:id', (req, res) => {

});

module.exports = router;