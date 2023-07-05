const about = (req, res) => {
    res.render('index', { title: "Acerca de" });
};

module.exports = {
    about
}