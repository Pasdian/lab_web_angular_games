"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gameSiteController_1 = __importDefault(require("../controllers/gameSiteController"));
class GameSiteRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/consolas', gameSiteController_1.default.getConsoles);
        this.router.get("/consolas/:id", gameSiteController_1.default.getConsole);
        this.router.get("/consolas/:id/juegos", gameSiteController_1.default.getConsoleGames);
        this.router.post('/consolas', gameSiteController_1.default.createConsole);
        this.router.get('/juegos', gameSiteController_1.default.listGames);
        this.router.get("/juegos/:id", gameSiteController_1.default.getGame);
        this.router.post('/juegos', gameSiteController_1.default.createGame);
        this.router.get("/resconsolas", gameSiteController_1.default.findConsole);
        this.router.get("/resjuegos", gameSiteController_1.default.findGame);
        this.router.post('/blog', gameSiteController_1.default.createPost);
        this.router.get('/blog', gameSiteController_1.default.getPosts);
    }
}
const gameSiteRoutes = new GameSiteRoutes();
exports.default = gameSiteRoutes.router;
