const app = require('./app');

const server = app.listen(3000, () => {
	console.log(`MR2023 is running on port ${server.address().port}`);
});