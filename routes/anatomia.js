const express = require("express");
const router = express.Router();
const anatomiaController = require("../controllers/anatomiaController");

router.get('/anatomia', anatomiaController.homeAnatomia);
router.get('/resumenes', anatomiaController.resumenesAnatomia);
router.get('/presentaciones', anatomiaController.presentacionesAnatomia);
router.get('/cuestionarios', anatomiaController.cuestionariosAnatomia);
router.get('/parciales', anatomiaController.parcialesAnatomia);
router.get('/libros', anatomiaController.librosAnatomia);
router.get('/extras', anatomiaController.extrasAnatomia);

module.exports = router;