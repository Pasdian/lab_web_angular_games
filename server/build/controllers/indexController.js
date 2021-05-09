"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({ text: 'The api is in /api/games-site' });
    }
}
exports.indexController = new IndexController();
