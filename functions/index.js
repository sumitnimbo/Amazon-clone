const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")('sk_test_51JOj3HSA5RPzKWqmHSYiQU39KywOo3lK1Qs9Qij6mO7R3QkNgM3uEp4LPP0p0lLmi8XKZ6d0kO6dChiy2QsN9cm400uI1uROZ6');
 
// App config

const app = express();

// middlewares

app.use(cors({
    origin : true
}));

app.use(express.json());

//API routes

app.get('/',(req,res) => {
    res.status(200).send('Hello World')
})

app.post('/payments/create', async (req,res) => {
    const total = req.query.total ;

    console.log("payment req received" , total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "inr",
    })

    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// listen command 

exports.api = functions.https.onRequest(app);


// http://localhost:5001/clone-7978f/us-central1/api