const express = require('express');
const connectDB = require('./config/db');
const tokenRoutes = require('./routes/tokenRoutes');
const errorHandler = require('./middlewares/errorHandler');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use('/api', tokenRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));
