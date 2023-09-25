const Media = require('../models/media');
const { request, response } = require('express');

const createMedia = async (req = request, res = response) => {
    const { serial, titulo, sinopsis, urlPelicula, imagenPortada, anoEstreno, genero, director, productora, tipo } = req.body;
    try {
        const mediaDB = await Media.findOne({ serial });

        if (mediaDB) {
            return res.status(400).json({ mensaje: 'La película o serie ya existe' });
        }

        const datos = {
            serial,
            titulo,
            sinopsis,
            urlPelicula,
            imagenPortada,
            anoEstreno,
            genero,
            director,
            productora,
            tipo
        };

        const media = new Media(datos);

        await media.save();

        return res.status(201).json(media);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensaje: error });
    }
};

module.exports = {
    createMedia
}