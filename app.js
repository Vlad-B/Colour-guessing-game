const express = require('express');
const app     = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('home.ejs');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Express server is running on port ${ PORT }`);
});