const { Router } = require('express');
const { createTipo } = require('../controllers/tipo');

const router = Router();

// Crear un director
router.post('/', createTipo);



module.exports = router;
