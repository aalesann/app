const router = require('express').Router();
const axios = require('axios');

// Ruta principal
router.get('/', async (req, res) => {
    res.sendFile(__dirname, '/index.html');
});

module.exports = router;