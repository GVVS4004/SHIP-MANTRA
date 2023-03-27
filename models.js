const mongoose= require("mongoose");
//Creating a schema for the trips
const tripSchema= mongoose.Schema({
    shipperName:{
        type:String,
        required:true,
    },
    startLocation:{
        type:Object,
        longitude:{
            type:Number,
            required:true,
        },
        latitutde:{
            type:Number,
            required:true,
        }

    },
    endLocation:{
        type:Object,
        longitude:{
            type:Number,
            required:true,
        },
        latitutde:{
            type:Number,
            required:true,
        },
        required:true
    },
    tripStatus:{
        type:String,
        required:true,
    }
})

// creating a schema for the Orders

const orderSchema = mongoose.Schema({
    senderName:{
        type:String,
        required:true,
    },
    senderLocation:{
        type:Object,
        required:true,
        longitude:{
            type:Number,
            required:true,
        },
        latitutde:{
            type:Number,
            required:true,
        }
    },
    recipientName:{
        type:String,
        required:true,
    },
    recipientLocation:{
        type:Object,
        required:true,
        longitude:{
            type:Number,
            required:true,
        },
        latitutde:{
            type:Number,
            required:true,
        }
    },
    packages:{
        type:Array,
        required:true,
        length:{
            type:Number,
            requred:true,
        },
        breadth:{
            type:Number,
            required:true,
        },
        height:{
            type:Number,
            required:true,
        },
        weight:{
            type:Number,
            required:true,
        },
        items:{
           type:Array,
           itemName:{
            type:String,
            required:true,
           },
           itemQty:{
            type:String,
            required:true,
           },
           required:true
        },
    },
    trips:{
        type:[tripSchema],
        required:true,
    }
});
// Creating models for the orders and trips 
const Order = mongoose.model("order", orderSchema);
const Trip = mongoose.model("trip", tripSchema);
// exporting models
module.exports = {Order};