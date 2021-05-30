/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable quotes */
const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.client_secret);

// Config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes
app.get('/', (req, res) => {
    res.status(200).send('Hello');
});

app.post('/payments/create', async (req, res) => {
    const total = await req.query.total;
    console.log('Payment request recieved', total);

    const paymentIntent = stripe.paymentIntent.create({
        amount: total,
        currency: 'usd',
    });
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/clone-8d348/us-central1/api
