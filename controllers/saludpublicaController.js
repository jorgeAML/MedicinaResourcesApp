const homeSaludp = (req, res) => {
    res.render("salud_publica/index", { title: "Pagina principal de Salud Publica" });
};
const librosSalud = (req, res) => {
    res.render("salud_publica/index", { title: "Libros de Salud Publica" });
};
const realidadSalud = (req, res) => {
    res.render("salud_publica/index", { title: "Realidad Nacional Salud Publica" });
};
const epidemiologiaSalud = (req, res) => {
    res.render("salud_publica/index", { title: "Modulo de epidemiologia Salud publica" });
};
const asisSalud = (req, res) => {
    res.render("salud_publica/index", { title: "Asis Salud Publica" });
};
const investigacionSalud = (req, res) => {
    res.render("salud_publica/index", { title: "Modulo de investigacion salud publica" });
};
const preventivaSalud = (req, res) => {
    res.render("salud_publica/index", { title: "Modulo de salud preventiva salud publica" });
};
const examenesSalud = (req, res) => {
    res.render("salud_publica/index", { title: "examenes de Salud Publica" });
};
module.exports = {
    homeSaludp,
    librosSalud,
    realidadSalud,
    epidemiologiaSalud,
    asisSalud,
    investigacionSalud,
    preventivaSalud,
    examenesSalud
}
