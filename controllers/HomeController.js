const respondWithIndex = (req, res) => {
	res.render("index", {title:"MR2023"});
};

module.exports = {
	respondWithIndex
}