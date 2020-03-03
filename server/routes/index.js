const router = require('express').Router({ mergeParams: true });
const orders = require('./orders');

router.use('/orders', orders);

module.exports = router;
