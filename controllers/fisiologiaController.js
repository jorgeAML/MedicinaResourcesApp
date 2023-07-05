/* Home page */
const homeFisiologia = (req, res) => {
    res.render('fisiologia/index', { title: "Fisiologia pagina principal" });
};
/* Resumenes */
const resumenesFisiologia = (req, res) => {
    res.render('fisiologia/index', { title: "Resumenes de Fisiologia" });
};
/* Resumenes Yuri */
const resumenesYuriFisio = (req, res) => {
    res.render('fisiologia/index', { title: "Resumenes de Yuri" });
};
/* Resumenes Kenia */
const resumenesKeniaFisio = (req, res) => {
    res.render('fisiologia/index', { title: "Resumenes de Kenia" });
};
/* Resumenes Jorge */
const resumenesJorgeFisio = (req, res) => {
    res.render('fisiologia/index', { title: "Resumenes de Jorge AML" });
};
/* Casos clinicos */
const casosFisiologia = (req, res) => {
    res.render('fisiologia/index', { title: "Casos Clinicos de Fisiologia" });
};
/* Presentaciones Garcia */
const presentacionesGarciaFisiologia = (req, res) => {
    res.render('fisiologia/index', { title: "Presentaciones Dr Garcia Fisiologia" });
};
/* Presentaciones Molina */
const presentacionesMolinaFisio = (req, res) => {
    res.render('fisiologia/index', { title: "Presentaciones Dr Molina Fisiologia" });
};
/* Parciales de Fisiologia */
const parcialesFisiologia = (req, res) => {
    res.render('fisiologia/index', { title: "Parciales de Fisiologia" });
};

module.exports = {
    homeFisiologia,
    resumenesFisiologia,
    casosFisiologia,
    presentacionesGarciaFisiologia,
    presentacionesMolinaFisio,
    parcialesFisiologia,
    resumenesYuriFisio,
    resumenesKeniaFisio,
    resumenesJorgeFisio
}