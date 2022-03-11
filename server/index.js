const express = require('express');
const app = express();
const cors = require('cors');

//middleware
app.use(express.json());
app.use(cors());

//ROUTES

//profile
app.use('/', require('./routes/profile'));

//question routes
app.use('/', require('./routes/questions'));

//register and login routes
app.use('/auth', require('./routes/jwtAuth'));

app.listen(5000, () => {
	console.log('Server is running on port: 5000');
});
