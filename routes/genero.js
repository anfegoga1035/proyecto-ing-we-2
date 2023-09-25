const { Router } = require('express')
const {createGenero} = require('../controllers/genero')

const router = Router()

/**
 * Crear genero
 */
router.post('/', createGenero)

/**
 * consultar todos los géneros
 */

/**
 * Consultar un género por su ID
 */

/**
 * Actualizar genero
 */

/**
 * Borrar un género
 */

module.exports = router