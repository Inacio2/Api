const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


var DB = {

    games : [
        {

            id : 1,
            title: "Call of Duty",
            price : 5000.00
        },
         {
            id : 2,
            title: "Mortal Combat",
            price : 2000.00
        },
         {
            id : 3,
            title: "PES 2021",
            price : 3000.00
        }
   
    ]

}



app.get("/games",(req,res) => {
    res.statusCode = 200;
    res.json(DB.games);
})

app.get("/games/:id",(req,res) =>{

    if(isNaN(req.params.id)){
        res.sendStatus(400)

    }else{

    }

    var id = parseInt(req.params.id);

    var game = DB.games.find(g => g.id == id)

    if(game != undefined){
        res.statusCode = 200
        res.json(game)
        
    }else{
        res.sendStatus(404)
    }

})






app.get("/game",(req,res) =>{
    res.statusCode = 200;
    res.json(DB.games);
})

app.post("/game",(req,res) =>{

})











app.listen(3000,() => {
    console.log("API rodando......");
})
