const express = require('express');

const Router = require('./v1/routes/productRoutes');

const app = express();
const PORT = 3000;


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api/v1/product', Router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
