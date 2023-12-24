const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51ONtLjSD0qXNpe7rZouKK4S8KExy3MVR9uDcz5o3dpv90qZv5QTlK7mC0D9HqdjZLWOQ6fmEEs2gJAYHzHNqpX6D00Bie0y2cR')


// api

// app config
const app = express();

// middlewares
app.use(cors({origin: true}));
app.use(express.json());

// api routes
app.get("/", (request, response) => response.status(200).send("hello world"));


app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received BOOM!! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // OK - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://127.0.0.1:5001/clone-4f2a5/us-central1/api