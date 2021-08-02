const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const mongoose = require('mongoose');

var storage = new GridFsStorage({db: mongoose.connection});

const upload = multer({storage: storage});

module.exports = upload;