/* Pagina principal */
const homeAnatomia = (req, res) => {
    res.render('anatomia/index', { title: "Anatomia pagina principal" });
};
/* Resumenes */
const resumenesAnatomia = (req, res) => {
    res.render('anatomia/index', { title: "Resumenes de Anatomia" });
};
/* Presentaciones */
const presentacionesAnatomia = (req, res) => {
    res.render('anatomia/index', { title: "Presentaciones de Anatomia" });
};
/* Cuestionarioes */
const cuestionariosAnatomia = (req, res) => {
    res.render('anatomia/index', { title: "Cuestionarios de Anatomia" });
};
/* Parciales */
const parcialesAnatomia = (req, res) => {
    res.render('anatomia/index', { title: "Parciales de Anatomia" });
};
/* Libros */
const librosAnatomia = (req, res) => {
    res.render('anatomia/index', { title: "Libros de Anatomia" });
};
/* Extras */
const extrasAnatomia = (req, res) => {
    res.render('anatomia/index', { title: "Extras de Anatomia" });
};
module.exports = {
    homeAnatomia,
    resumenesAnatomia,
    presentacionesAnatomia,
    cuestionariosAnatomia,
    parcialesAnatomia,
    librosAnatomia,
    extrasAnatomia
}