const express = require('express'); 
const bodyParser = require('body-parser') 
const path = require('path'); 
const app = express(); 
app.use(express.static(path.join(__dirname, 'build'))); 


app.get('/ping', function (req, res) { 
    return res.send('pong'); 
}); 


app.get('/', function (req, res) { 
    return res.send('Hello World!'); 
}); 
   
 
app.get('/customers', (req, res) => { 
    return res.json([ 
        { 
            "id" : "1001", 
            "fname" : "Mathew", 
            "lname" : "Paul" 
        }, 
        { 
            "id" : "1002", 
            "fname" : "Thomas", 
            "lname" : "Andrews" 
        }, 
        { 
            "id" : "1003", 
            "fname" : "Job", 
            "lname" : "Jacob " 
        }, 
        { 
            "id" : "1004", 
            "fname" : "Stephen", 
            "lname" : "James" 
        } 
    ]); 
});
app.get('/customers/:id', (req, res) => { 
    const custData = { 
        "1001": { 
            "id" : "1001", 
            "fname" : "Mathew", 
            "lname" : "Paul", 
            "car-model" :"BMW", 
            "car-colour":"White" 
        }, 
        "1002": { 
            "id" : "1002", 
            "fname" : "Thomas", 
            "lname" : "Andrews", 
            "car-model" :"Audi", 
            "car-colour":"Red" 
        }, 
        "1003": { 
            "id" : "1003", 
            "fname" : "Job", 
            "lname" : "Jacob ", 
            "car-model" :"Mercedes-Benz", 
            "car-colour":"Blue" 
        }, 
        "1004": { 
            "id" : "1004", 
        "fname" : "Stephen", 
            "lname" : "James", 
            "car-model" :"Lamborghini", 
            "car-colour":"Black" 
        } 
    }; 


    return res.json(custData[req.params.id]); 
}); 


app.listen(process.env.PORT || 8080); 
   