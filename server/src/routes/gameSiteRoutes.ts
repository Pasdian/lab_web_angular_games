import { Router } from 'express';
import gamesSiteController from "../controllers/gameSiteController";


class GameSiteRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config() {
    this.router.get('/consolas', gamesSiteController.getConsoles);
    this.router.get("/consolas/:id", gamesSiteController.getConsole);
    this.router.get("/consolas/:id/juegos", gamesSiteController.getConsoleGames);
    this.router.post('/consolas', gamesSiteController.createConsole);


    this.router.get('/juegos', gamesSiteController.listGames);
    this.router.get("/juegos/:id", gamesSiteController.getGame);
    this.router.post('/juegos', gamesSiteController.createGame)

    this.router.get("/resconsolas/:keyword", gamesSiteController.findConsole);
    this.router.get("/resjuegos/:keyword", gamesSiteController.findGame);

    this.router.post('/blog', gamesSiteController.createPost)
    this.router.get('/blog', gamesSiteController.getPosts)

    this.router.get('/users', gamesSiteController.getUsers)
    this.router.post('/users', gamesSiteController.authUser)
  }
}

const gameSiteRoutes = new GameSiteRoutes();
export default gameSiteRoutes.router;
