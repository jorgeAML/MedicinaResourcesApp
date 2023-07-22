const homeBioquimica = (req, res) => {
    res.render("bioquimica/index", { title: "Pagina principal de bioquimica" });
};
//LIBROS DE BIOQUIMICA
const librosBioquimica = (req, res) => {
    res.render("bioquimica/index", { title: "Libros de bioquimica" });
};
//LABORATORIOS CASOS CLINICOS
const labsBioquimica = (req, res) => {
    res.render("bioquimica/index", { title: "Laboratorios y casos bioquimica" });
};
//GUIAS DE ESTUDIO
const guiasBioquimica = (req, res) => {
    res.render("bioquimica/index", { title: "Guias de estudio bioquimica" });
};
//PRESENTACIONES
const presentacionesBioquimica = (req, res) => {
    res.render("bioquimica/index", { title: "Presentaciones de bioquimica" });
};
//RESUMENES
const resumenesBioquimica = (req, res) => {
    res.render("bioquimica/index", { title: "Resumenes de bioquimica" });
};
//PANUCCIS
const panuccisBioquimica = (req, res) => {
    res.render("bioquimica/index", { title: "Panuccis de bioquimica" });
};
//EXAMENES
const examenesBioquimica = (req, res) => {
    res.render("bioquimica/index", { title: "Examenes de bioquimica" });
};

module.exports = {
    homeBioquimica,
    librosBioquimica,
    labsBioquimica,
    guiasBioquimica,
    presentacionesBioquimica,
    resumenesBioquimica,
    panuccisBioquimica,
    examenesBioquimica
}