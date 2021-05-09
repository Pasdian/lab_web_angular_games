import { Request, Response } from 'express';

class IndexController {

  public index (req: Request, res: Response){
    res.json({text: 'The api is in /api/games-site'})}
}

export const indexController = new IndexController()
