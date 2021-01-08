const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const isInt = require(__dirname + "/isInt.js");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const items = [];
const listTitles = ["Primary List"];

// App Root 
app.get("/", function (req, res) {
    let todaysDate = date.getDate();
    // Rendering list.ejs to root (/)
    res.render("list", {
        listTitle: listTitles[0],
        date: todaysDate,
        listOfItems: items
    });
});
app.post("/", function (req, res) {
    submitValue = req.body.submit; // the submit comes with the value containing the title of the list or the item to remove
    
    // Main List Check
    if (submitValue === listTitles[0]) {
        items.push(req.body.newItem);
        res.redirect("/");
    }
    // Removing An Element
    else if (isInt.isInt(submitValue) === true) {
        items.splice(parseInt(submitValue, 10),1);
        res.redirect("/");
    }
    /* Incase I shoose to add 2 or More Lists
    if (submitValue === listTitles[1]) {
        items.push(req.body.newItem);
        res.redirect("/" + listTitles[1] );
    }
    */
});

app.listen(3000, function () {
    console.log("listening on 3000");
});