const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51I5nf0K3XWmnPvma8VFV59tOtSOOSyuhjUeIeuYco6xKUVVegIQJUv9u046EzlNY8zVgNGrKqbSMwGCxB0ivvvlf00Me8Z2zf9"
);

//API

// App Config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API Routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request received for >>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen Command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/sabkuah-961f5/us-central1/api
