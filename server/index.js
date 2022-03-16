const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const path = require('path');

//process.env.PORT
//process.env.NODE_ENV => production or undefined

//middleware
app.use(express.json());
app.use(cors());

//ROUTES

//profile
app.use('/', require('./routes/profile'));

//question routes
app.use('/', require('./routes/questions'));

//comments routes
app.use('/', require('./routes/comments'));

//register and login routes
app.use('/auth', require('./routes/jwtAuth'));

app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`);
});
