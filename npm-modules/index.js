const _ = require("lodash");

const array = [4, 6, 2, 8, 3, 5, 9, 6, 1];

_.chunk(array, 3).forEach((item) => {
  console.log("-----");
  item.forEach((i) => {
    console.log(i + "!");
  });
});
