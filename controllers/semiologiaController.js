const homeSemio = (req, res) => {
    res.render("semiologia/index", { title: "Pagina principal de Semiologia" });
};
const librosSemio = (req, res) => {
    res.render("semiologia/index", { title: "Libros de Semiologia" });
};
const introductoriaSemio = (req, res) => {
    res.render("semiologia/index", { title: "Seccion de Introduccion" });
};
const adultosSemio = (req, res) => {
    res.render('semiologia/index', { title: "Modulo de adultos" });
};
const ninosSemio = (req, res) => {
    res.render("semiologia/index", { title: "Modulo de precosez" });
};
const dermaSemio = (req, res) => {
    res.render("semiologia/index", { title: "Modulo de dermatologia" });
}
const examenesSemio = (req, res) => {
    res.render("semiologia/index", { title: "Examenes de semiologia" });
};

module.exports = {
    homeSemio,
    librosSemio,
    introductoriaSemio,
    adultosSemio,
    ninosSemio,
    dermaSemio,
    examenesSemio
}