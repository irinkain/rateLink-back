module.exports = {
  //...
  load: {
    before: ["cors"],
    order: [
      "Define the middlewares' load order by putting their name in this array is the right order",
    ],
  },
};
