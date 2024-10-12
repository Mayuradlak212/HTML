const express = require('express');
const app = express();
const bcrypt =require("bcrypt");
const bodyParser = require('body-parser');
// const bodyParser =require('body-parser');   
const path = require('path');
const userModel = require("./user.model")
// Imported mongoose module for MongoDB connection
const connection = require("./config/database")
// Imported express module for create server instance
app.listen(3000, () => {
    console.log("listening on port 3000")
});
// app.use(express.json())  
app.use(bodyParser.json());
app.use(express.static("./config"))

app.get("/home", (request, response) => {
    // console.log("Current Path ",path.basename("C:\Users\lenovo\OneDrive\Desktop\Batch Aug-Sept\backend"))
    return response.status(200).json({
        status: 200,
        message: "Congratulations we have created API Successfully "
    })
})

// middleware

function checkEmail(req, res, next) {
    
      const email=req.body.email;
      const phone=req.body.phone;
      try {
        
    
      if(email.includes("@") && email.includes(".com") && phone.length==10) {
        next()
      }
      else{
        return res.status(400).json({
            status: 400,
            message: "Invalid Email or Phone Number"
        })
      }
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message:error.message
        })   
    }
}

app.post("/create",checkEmail, async (req, res) => {
    try {
        console.log(req.body)
        const { name, email, phone, city,password } = req.body;
        const hashedPassword = await bcrypt.hash(password,10);
        console.log("Hashed password: " ,hashedPassword)
        const user = new userModel({ name, email, phone, city,password:hashedPassword });
        const saveData = await user.save();
        return res.status(200).json({
            status: 200,
            message: "User created successfully",
            data: saveData
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message,
            data: []
        })
    }

})
app.post("/login",async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({
                status: 404,
                message: "User not found"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                status: 401,
                message: "Invalid credentials"
            })
        }
        return res.status(200).json({
            status: 200,
            message: "Logged in successfully",
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message,
            data: []
        })
    }
 })
app.get("/get", async (req, res) => {
    const users = await userModel.find();
    return res.status(200).json({
        status: 200,
        message: "User fetched successfully",
        data: users
    })
})
app.put("/update/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phone, city } = req.body;
        const updatedUser = await userModel.findByIdAndUpdate(id, { name, email, phone, city }, { new: true });
        return res.status(200).json({
            status: 200,
            message: "User updated successfully",
            data: updatedUser
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message,
            data: []
        })
    }
})

app.delete("/delete/:id", async (req, res) => {
  try {
        const { id } = req.params;
        const deletedUser = await userModel.findByIdAndDelete(id);
        return res.status(200).json({
            status: 200,
            message: "User deleted successfully",
            data: deletedUser
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message,
            data: []
        })
    }
 
})
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Started Server using listen Method 
