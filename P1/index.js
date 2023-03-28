const express = require("express");
const app = express();

// Middleware used to parse through the body

const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Importing Models from the models.js 

const {Order} = require("./models");
const mongoose = require("mongoose");

// Connecting to the mongodb database using URI

mongoose.connect("mongodb://localhost:27017/Orders", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Connected to MongoDB DataBase");
});

// Creating an endpoint getOrder for the api which retrieves the order by Id.

app.get("/api/getOrder", async (req, res) => {
  const orderId = req.body.orderId;
  try {
    response = await Order.find({ _id:orderId });
    if (!response) {
      res.json({ status: "No Object found" });
    } else {
      res.json(response);
    }
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

// Creating an endpoint postOrder for the api which inserts the order with the given schema.


app.post("/api/postOrder", async (req, res) => {
  const order = req.body;
  try {
    const response = await Order.create(order);
    res.json({ success: true,createdOrder:response });
  } catch (error) {
    console.log(error);
    res.json({ error: error });
  }
});

// Creating an endpoint upadteTripStatus for the api which updates the trip status for the given tripId.


app.patch("/api/updateTripStatus", async (req, res) => {
  const tripId = req.body.tripId;
  const tripStatus = req.body.tripStatus;
  try {
    const response = await Order.findOneAndUpdate(
      { "trips._id": tripId },
      { $set: { "trips.$.tripStatus": tripStatus } },{new:true}
    );
    res.json(response);
  } catch (error) {
    console.log(error);
    res.json({ error: error });
  }
});

// Creating an endpoint getTripStatus for the api which retrieves the trip status for the given tripId.


app.get("/api/getTripStatus", async (req, res) => {
  const tripId = req.body.tripId;
  try {
    const response = await Order.find({ "trips._id": tripId });
    if (!response) {
      res.json({ status: "No Object found" });
    } else {
      res.json(response);
    }
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

// Starting the server on port 3000

app.listen(3000, () => {
  console.log("server is running at 3000");
});
