"use strict";
module.exports = function (app) {
  var gameSiteCollection = require("../controllers/gameSiteCollectionController");

  app.route("/consolas").get(gameSiteCollection.getConsoles)
  app.route("/consolas/:id").get(gameSiteCollection.getConsole)
  app.route("/consolas/:id/games").get(gameSiteCollection.getConsoleGames)

  app.route("/juegosconsola/juego/:id").get(gameSiteCollection.getGame)

  app.route("/resconsolas/:palabrasBusqueda").get(gameSiteCollection.findConsole)
  app.route("/resjuegos/:palabrasBusqueda").get(gameSiteCollection.findGame)

};
