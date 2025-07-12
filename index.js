const express = ("express");
const app = express();
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


var DB = {

    games : [
        {
            id : 1,
            titile: "Call of Duty",
            price : 5000.00
        },
         {
            id : 2,
            titile: "Mortal Combat",
            price : 2000.00
        },
         {
            id : 3,
            titile: "PES 2021",
            price : 3000.00
        }
   
    ]

}



app.get("/game",(req,res) =>{
    res.statusCode = 200;
    res.json(DB.games);
})













app.listen(300,() => {
    console.log("API rodando......");
})
