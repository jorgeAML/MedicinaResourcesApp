/* Home Histologia */
const homeHistologia = (req, res) => {
    res.render("histologia/index", { title: "Pagina principal Histologia" });
};
/* Libros */
const librosHistologia = (req, res) => {
    res.render('histologia/index', { title: "Libros de Histologia" });
};
/* Guias de estudio */
const guiasHistologia = (req, res) => {
    res.render('histologia/index', { title: 'Guias de estudio Histologia' });
};
/* Presentaciones Griselda */
const presentacionesHisto = (req, res) => {
    res.render('histologia/index', {title: 'Presentaciones de Griselda Histologia'})
}
/* Presentaciones Miuril */
const presentMiuruilHisto = (req, res) => {
    res.render('histologia/index', { title: 'Presentaciones de Miuril' });
};
/* Presentaciones de Silvia */
const presentSilviaHisto = (req, res) => {
    res.render('histologia/index', { title: 'Presentaciones de Silvia Histologia' });
};
/* Resumenes de Histologia */
const resumenesHistologia = (req, res) => {
    res.render('histologia/index', { title: 'Resumenes de Histologia' });
};
/* Resumenes Sofia */
const resumenesSofiHisto = (req, res) => {
    res.render('histologia/index', { title: 'Resumenes de Sofia Pellecer' });
};
/* Laminillas parte 1 */
const laminillasIHistologia = (req, res) => {
    res.render('histologia/index', { title: "Laminillas parte 1 Histologia" });
};
/* Laminillas parte 2 */
const laminillasIIHistologia = (req, res) => {
    res.render('histologia/index', { title: "Laminillas parte 2 Histologia" });
};
/* Parciales de Histologia */
const parcialesHistologia = (req, res) => {
    res.render('histologia/index', { title: "Parciales de Histologia" });
};
module.exports = {
    homeHistologia,
    librosHistologia,
    guiasHistologia,
    presentacionesHisto,
    presentMiuruilHisto,
    presentSilviaHisto,
    resumenesHistologia,
    resumenesSofiHisto,
    laminillasIHistologia,
    laminillasIIHistologia,
    parcialesHistologia
};