const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51JFLoFKWPiO9XVVqERgQGXnmcId4mTCXTS6JeKzzWLJzhEBuMrHJaHq5DJgIdaCgQ1IXK4pKrRlw3j4i00tLrxHC00pnj3s2n6');

// API

// App config
const app  = express();

// Middlewares
app.use(cors({origin: '*'}));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('Hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request Recieved, for this amount', total);

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total, // subunits of the currency
            currency: 'usd'
        })

        // OK -created
        response.status(201).send({
            clientSecret: paymentIntent.client_secret
        });

    } catch(e){
        
        response.status(404).send({
            clientSecret: null
        });
    }
})

// Listend command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/e-commerce-5d98a/us-central1/api