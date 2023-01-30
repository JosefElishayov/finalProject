const indexR = require("./index");
const usersR = require("./users");
const categoriesR = require("./categories");
const sectionsR = require("./sections");
const autosR = require("./autos");
const contactUsR=require("./contactUs");
const brunchesR=require("./branches");



exports.routesInit = (app) => {
  app.use("/",indexR);
  app.use("/users",usersR);
  app.use("/categories",categoriesR);
  app.use("/sections",sectionsR);
  app.use("/autos",autosR);
  app.use("/contact",contactUsR);
  app.use("/branches",brunchesR);

}