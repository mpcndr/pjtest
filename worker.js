const dataFood = require("./data/foodlist.json");

// console.log(data);

exports.getAllFood = function () {
  return dataFood.data;
};

exports.getFoodFromID = function (id) {
  let f = dataFood.data.find((food_id) => {
    return food_id.id == id;
  });
  return f;
};

exports.getFoodSearch = function (str) {
  let f = dataFood.data.filter((food_str) => {
    return food_str.food_name.indexOf(str) != -1;
  });
  return f;
};

exports.addfood = function(f_name, f_option, f_price, f_img) {
    dataFood.data.push({
        "id": dataFood.count,
        "food_name": f_name,
        "option": f_option,
        "price": f_price,
        "img": f_img
    })
    dataFood.count++;
}
