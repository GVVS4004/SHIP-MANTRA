# Order Management System API
This is an API for an order management system that allows users to create orders, retrieve orders by ID, update trip status, and retrieve trip status by ID. The API is built with Node.js and Express, and uses Mongoose to interact with a MongoDB database.

# Features
* Create an order with sender and recipient information, package details and list of items and quantities.
* Retrieve an order by its ID.
* Update the status of a trip within an order.
* Retrieve the status of a trip within an order.

## Installation
1. Clone the repository to your local machine:

```bash
git clone https://github.com/GVVS4004/SHIP-MANTRA-P2.git
```
2. Install dependencies:
 
```bash
<!-- Terminal  -->

cd server
npm install
```
3. Start the server:
```bash
<!-- Terminal  -->

cd server
npm start
```
&nbsp;&nbsp; This will start the nodemon server on port 3000 on your local host.
## Usage
## API ENDPOINTS
1. Open Postman and goto APIs on the left side.
2. POST /api/postOrder  
Choose the post method and write the following url
```bash
http://localhost:3000/api/postOrder
```
&nbsp;&nbsp;Goto body,select raw and JSON and post the orders with appropriate schema
&nbsp;&nbsp;For Ex:
```bash
{
  "senderName": "Teja Sai",
  "senderLocation": {
    "latitude": 37.7749,
    "longitude": -122.4194
  },
  "recipientName": "Sai Teja",
  "recipientLocation": {
    "latitude": 37.7749,
    "longitude": -122.4194
  },
  "packages": [
    {
      "length": 10,
      "breadth": 5,
      "height": 3,
      "weight": 2,
      "items": [
        {
          "name": "Cricket Bat",
          "quantity": 2
        },
        {
          "name": "Gloves",
          "quantity": 1
        }
      ]
    },
    {
      "length": 20,
      "breadth": 10,
      "height": 6,
      "weight": 5,
      "items": [
        {
          "name": "T-shirt",
          "quantity": 3
        },
        {
          "name": "Shorts",
          "quantity": 1
        }
      ]
    }
  ],
  "trips": [
    {
      "shipperName": "Shipper 1",
      "startLocation": {
        "latitude": 37.7749,
        "longitude": -122.4194
      },
      "endLocation": {
        "latitude": 40.7128,
        "longitude": -74.0060
      },
      "tripStatus": "on the way"
    },
    {
      "shipperName": "Shipper 2",
      "startLocation": {
        "latitude": 51.5074,
        "longitude": -0.1278
      },
      "endLocation": {
        "latitude": 48.8566,
        "longitude": 2.3522
      },
      "tripStatus": "Pending"
    }
  ]
}

```
&nbsp;&nbsp; This returns the "success:true" and the created order details.  
![postOrder](https://user-images.githubusercontent.com/93395036/228978774-b385a524-8b5d-4fe5-9d7b-a34863cb8c0d.png)

3. GET /api/getOrder  
Choose the get method and write the following url
```bash
http://localhost:3000/api/getOrder
```
&nbsp;&nbsp;Goto body,select raw and JSON and get the order with order id.
&nbsp;&nbsp;For Ex:
```bash
{
    "orderId":"6421d3631cc59e9365b52b94"
}
```
&nbsp; * If the order is found: The JSON representation of the order.  
&nbsp; * If the order is not found: { "status": "No Object found" }. 

![getOrder](https://user-images.githubusercontent.com/93395036/228979234-6753fafd-3ec8-42ec-9db2-c5e96828211b.png)


4. PATCH /api/updateTripStatus  
Choose the patch method and write the following url  
```bash
http://localhost:3000/api/updateTripStatus
```
&nbsp;&nbsp;Goto body,select raw and JSON and patch the trip with trip id and tripStatus.  
&nbsp;&nbsp;For Ex:
```bash
{
    "tripId":"6421d3631cc59e9365b52b95",
    "tripStatus":"delivered"
}
```
&nbsp; * This will result in the updated Order details if tripId is found.  
&nbsp; * If the trip is not found:{ "error": <the error message> }.  
![updateTripStatus](https://user-images.githubusercontent.com/93395036/228978884-5d384813-2b78-4246-8953-4d72b34ec9bc.png)


5. GET /api/getTripStatus  
Choose the get method and write the following url
```bash
http://localhost:3000/api/getTripStatus
```
&nbsp;&nbsp;Goto body,select raw and JSON and get the trip with trip id.  
&nbsp;&nbsp;For Ex:
```bash
{
    "tripId":"6421d3631cc59e9365b52b95",
}
```
&nbsp; * This will result in the updated Order details if tripId is found.  
&nbsp; * If the trip is not found:{ "status": "No Object found" }.  

![getTripStatus](https://user-images.githubusercontent.com/93395036/228979424-8114c751-7d32-40e7-98b4-724a446f010e.png)


## License


[MIT](https://choosealicense.com/licenses/mit/)
