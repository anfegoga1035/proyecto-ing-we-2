const { Schema, model } = require('mongoose')

const MediaSchema = Schema({
    serial: {
        type: String,
        required: [true, 'Serial requerido'],
        unique: [true, 'media ya existe']
    },
    titulo: {
        type: String,
        required: [true, 'Titulo requerido'],
    },
    sipsosis: {
        type: String,
        required: [true, 'Sipnosis requerida'],
    },
    url: {
        type: String,
        required: [true, 'URL requerida'],
        unique: [true, 'URL ya existe']
    },
    portada: {
        type: String,
        required: [true, 'Portada requerida'],
    },
    anio_estreno: {
        type: Date,
        
    },
        genero: {
        type: Schema.Types.ObjectId,
        ref: 'Genero',
        required: true
    },
        director: {
        type: Schema.Types.ObjectId,
        ref: 'Director',
        required: true
    },
        productora: {
        type: Schema.Types.ObjectId,
        ref: 'Productora',
        required: true
    },
        tipo: {
        type: Schema.Types.ObjectId,
        ref: 'Tipo',
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }

})

module.exports = model('Media', MediaSchema)