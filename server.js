const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const loginRoutes = require('./routes/loginRoutes');
const testRoutes = require('./routes/testRoutes');
const dbConnect = require('./config/database');
const getRoute = require('./routes/getRoute');

dotenv.config();
//middlware
const app = express();
app.use(express.json());
app.use(cors()); 

//connect database
dbConnect();  

//routes
app.use('/api/post', testRoutes);
app.use('/api', getRoute);
app.use('/api', loginRoutes);

//server connection 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});


//default route
app.get('/', (req, res) => {
  // res.send('Hello World');
});
   