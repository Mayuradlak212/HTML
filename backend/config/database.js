
const mongoose = require('mongoose');
const uri="mongodb+srv://<username>:<passowrd>@cluster0.pofppjq.mongodb.net/BACKEND_LEARNING?retryWrites=true&w=majority"
mongoose.connect(uri)
.then(() => {
  console.log('Connected to MongoDB successfully.');
})
.catch((err) => {
  console.error('Unable to connect to MongoDB:', err);
});

module.exports = mongoose;