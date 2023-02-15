const mongoose = require("mongoose");

mongoose.set("strictQuery" , true);

mongoose.connect('mongodb+srv://Bhavika:<password>@cluster0.lkymt6n.mongodb.net/?retryWrites=true&w=majority', { tls: true, ssl: true })
.then(() => {
    console.log("Connection Successful!");
}).catch((err) => {
    console.log(err);
}); 
