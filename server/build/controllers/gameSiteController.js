"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesSiteController {
    // Console Methods
    getConsoles(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.query('SELECT * FROM consoles;');
            res.json(games);
        });
    }
    getConsole(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const consoles = yield database_1.default.query('SELECT * FROM consoles where consoleID = ?', [id]);
            if (consoles.length > 0) {
                return res.json(consoles[0]);
            }
            res.status(404).json({ message: 'Console does not exist' });
        });
    }
    getConsoleGames(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const consoles = yield database_1.default.query('SELECT * FROM games WHERE consoleID = ?', [id]);
            if (consoles.length > 0) {
                return res.json(consoles);
            }
            res.status(404).json({ message: 'Console does not exist' });
        });
    }
    createConsole(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO console set ?', [req.body]);
            res.json({ message: 'Console Created' });
        });
    }
    // Games Methods
    listGames(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const games = yield database_1.default.query('SELECT * FROM games;');
            res.json(games);
        });
    }
    getGame(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.default.query('SELECT * FROM games where gameID = ?', [
                id,
            ]);
            if (games.length > 0) {
                return res.json(games[0]);
            }
            res.status(404).json({ message: 'Game does not exist' });
        });
    }
    createGame(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO games set ?', [req.body]);
            res.json({ message: 'Game Created' });
        });
    }
    // Search Response Methods
    findConsole(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { keyword } = req.params;
            const consoles = yield database_1.default.query(`SELECT * FROM consoles WHERE consoleName LIKE "%${keyword}%"`);
            if (consoles.length > 0) {
                return res.json(consoles);
            }
            res.status(404).json({ message: 'Console does not exist' });
        });
    }
    findGame(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { keyword } = req.params;
            const consoles = yield database_1.default.query(`SELECT * FROM games WHERE gameName LIKE "%${keyword}%"`);
            if (consoles.length > 0) {
                return res.json(consoles);
            }
            res.status(404).json({ message: 'Game does not exist' });
        });
    }
    // Blog Methods
    createPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO Blog_Entries set ?', [req.body]);
            res.json({ message: 'Post Created' });
        });
    }
    getPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield database_1.default.query('SELECT * FROM Blog_Entries;');
            res.json(posts);
        });
    }
}
const gamesSiteController = new GamesSiteController();
exports.default = gamesSiteController;
