const express = require('express');
const router = express.Router();
const { beliToken, getTokens } = require('../controllers/tokenController');

router.post('/beli-token', beliToken);
router.get('/daftar-token', getTokens);

module.exports = router;
