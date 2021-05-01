"use strict";
var mysql = require("mysql");
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "Minecraft3199",
  database: "game_site_db",
});

exports.getConsoles = function (req, res) {
  pool.getConnection((err, con) => {
    if (err) throw err;
    console.log("[getConsoles] Connecting to db... ");
    con.query("SELECT * FROM consoles", function (err, result) {
      if (err) throw err;
      result = JSON.stringify(result);
      console.log("result:" + result);
      con.destroy();
      res.end(result);
    });
  });
};

exports.getConsole = function (req, res) {

  pool.getConnection((err, con) => {
    if (err) throw err;
    console.log("[getConsole] Connecting to db...");
    var id_console = req.params.consoleID;
    con.query(
      "select * from consoles where consoleID = " + mysql.escape(id_console),
      function (err, result) {
        if (err) throw err;
        result = JSON.stringify(result);
        console.log("Result: " + result);
        con.release((err) => {
          //   Cerramos Conexión
        });
        res.end(result);
      }
    );
  });
};

exports.getConsoleGames = function (req, res) {

  pool.getConnection((err, con) => {
    if (err) throw err;
    console.log("[getConsoleGames] Connecting to db...");
    var id_console = req.params.consoleID;
    con.query(
      "select * from games where consoleID = " + mysql.escape(id_console),
      function (err, result) {
        if (err) throw err;
        result = JSON.stringify(result);
        console.log("Result: " + result);
        con.release((err) => {
          //   Cerramos Conexión
        });
        res.end(result);
      }
    );
  });
};

exports.getGame = function (req, res) {
  pool.getConnection((err, con) => {
    if (err) throw err;
    console.log("[getGame] Connecting to db...");
    var id_game = req.params.gameID;
    con.query(
      "select * from games where gameID = " + mysql.escape(id_game),
      function (err, result) {
        if (err) throw err;
        result = JSON.stringify(result);
        console.log("Result: " + result);
        con.release((err) => {
          //   Cerramos Conexión
        });
        res.end(result);
      }
    );
  });
};

exports.findConsole = function (req, res) {
  pool.getConnection((err, con) => {
    if (err) throw err;
    console.log("[findConsole] Connecting to db...");
    var id_consoles = req.params.consoleID;
    con.query(
      "select * from games where consoleID = " + mysql.escape(id_consoles),
      function (err, result) {
        if (err) throw err;
        result = JSON.stringify(result);
        console.log("Result: " + result);
        con.release((err) => {
          //   Cerramos Conexión
        });
        res.end(result);
      }
    );
  });
};

exports.findGame = function (req, res) {
  pool.getConnection((err, con) => {
    if (err) throw err;
    console.log("[findGame] Connecting to db...");
    var id_game = req.params.gameID;
    con.query(
      "select * from games where gameID = " + mysql.escape(id_game),
      function (err, result) {
        if (err) throw err;
        result = JSON.stringify(result);
        console.log("Result: " + result);
        con.release((err) => {
          //   Cerramos Conexión
        });
        res.end(result);
      }
    );
  });
};
