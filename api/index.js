const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require("./router/auth");
const userRoute = require("./router/user");
const productRoute = require("./router/product");
const cartRoute = require("./router/cart");
const orderRoute = require("./router/order");
const cors = require('cors');
const stripeRoute = require("./router/Stripe");
const path = require('path');

dotenv.config();

mongoose.connect(
process.env.MONGO_URL).then(()=>{
    console.log('database connection successfull');
}).catch((err) =>{
console.log(err);
});

//routers
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/user",userRoute);
app.use("/api/products",productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order",orderRoute);
app.use("/api/chekout", stripeRoute);
app.use(cors());


app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.listen(process.env.PORT || 5000, ()=>{
    console.log('server is listening');
})