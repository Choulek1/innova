const express = require('express');
const app = express();
const db = require('./config/db');
db();

const cors = require('cors');
app.use(cors())
app.use(express.json())

const authentification = require('./authentication/authentrouter')
app.use("/frip", authentification);

const user = require('./routers/commandRouter');
 app.use('/frip',user)

const   product =require('./routers/productRoutes');
 app.use('/frip',product)



app.listen(3003, () => {
    console.log('raw el serveur ye5dem')
})