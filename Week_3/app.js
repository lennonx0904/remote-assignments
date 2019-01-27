
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: false} ));
app.use(cookieParser());
app.set("view engine", "pug");

// build the sever
app.get("/", (req, res) => {
    res.send("It's a Sever");
});


app.all("/getData", (req, res) => {
    //var number = Number(req.body.number);
    var number = Number(req.query.number);
    if (req.query.number === undefined) {
        res.send("Lack of Parameter");
    } else if (Number.isInteger(number) && number > 0) {
        var sum = 0;
        for (var i=1; i <= number; i++) {
            sum += i;
        }
        res.send(sum.toString());
    } else {
        res.send("Wrong Parameter");
    }  
});


app.get("/myName", (req, res) => {
    const name = req.cookies.name;
    if (name) {
        res.send("Hello, " + name);
    } else {
        res.render("myNamePage");
    }   
});

app.post("/myName", (req, res) => {
    res.redirect("/trackName");
});

app.post("/trackName", (req, res) => {
    res.cookie("name", req.body.name);
    res.redirect("/myName");
});


app.listen(3000);
