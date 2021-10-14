const express = require("express");
const func = require("./worker");

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.get("/getAllFood", (req, res) => {
  let resp = func.getAllFood();
  res.send(resp);
});

app.get("/getFoodFromID", (req, res) => {
  let reqq = req.query.id;
  let resp = func.getFoodFromID(reqq);
  res.send(resp);
});

app.get("/getFoodSearch", (req, res) => {
  let reqq = req.query.s;
  let resp = func.getFoodSearch(reqq);
  res.send(resp);
});

app.post("/getAllFood", (req, res) => {
  res.send("Hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
});

app.post('/getFoodSearch', (req, res) => {
    let reqq = req.body.s
    let resp = func.getFoodSearch(reqq)
    res.send(resp)
})

app.post('/addfood', (req, res) => {
    let food_name = req.body.food_name
    let option = req.body.option
    let price = req.body.price
    let img = req.body.img

    func.addfood(food_name, option, price, img)
    res.send("success")

})

app.listen(8080, () => {
  console.log("Hello World");
});
