import { Request, Response } from 'express';
import pool from '../database';

class GamesSiteController {
  // Console Methods

  public async getConsoles(req: Request, res: Response) {
    const games = await pool.query('SELECT * FROM consoles;');
    res.json(games);
  }

  public async getConsole(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const consoles = await pool.query(
      'SELECT * FROM consoles where consoleID = ?',
      [id]
    );
    if (consoles.length > 0) {
      return res.json(consoles[0]);
    }
    res.status(404).json({ message: 'Console does not exist' });
  }

  public async getConsoleGames(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const consoles = await pool.query(
      'SELECT * FROM games WHERE consoleID = ?',
      [id]
    );
    if (consoles.length > 0) {
      return res.json(consoles);
    }
    res.status(404).json({ message: 'Console does not exist' });
  }

  public async createConsole(req: Request, res: Response): Promise<void> {
    await pool.query('INSERT INTO consoles set ?', [req.body]);
    res.json({ message: 'Console Created' });
  }

  // Games Methods
  public async listGames(req: Request, res: Response): Promise<any> {
    const games = await pool.query('SELECT * FROM games;');
    res.json(games);
  }

  public async getGame(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const games = await pool.query('SELECT * FROM games where gameID = ?', [
      id,
    ]);
    if (games.length > 0) {
      return res.json(games[0]);
    }
    res.status(404).json({ message: 'Game does not exist' });
  }

  public async createGame(req: Request, res: Response): Promise<void> {
    await pool.query('INSERT INTO games set ?', [req.body]);
    res.json({ message: 'Game Created' });
  }

  // Search Response Methods

  public async findConsole(req: Request, res: Response): Promise<any> {
    const { keyword }  = req.params;
    const consoles = await pool.query(
      `SELECT * FROM consoles WHERE consoleName LIKE "%${keyword}%"`
    );
    if (consoles.length > 0) {
      return res.json(consoles);
    }
    res.status(404).json({ message: 'Console does not exist' });
  }

  public async findGame(req: Request, res: Response): Promise<any> {
    const { keyword }  = req.params;
    const consoles = await pool.query(
      `SELECT * FROM games WHERE gameName LIKE "%${keyword}%"`
    );
    if (consoles.length > 0) {
      return res.json(consoles);
    }
    res.status(404).json({ message: 'Game does not exist' });
  }

  // Blog Methods
  public async createPost(req: Request, res: Response): Promise<void> {
    await pool.query('INSERT INTO Blog_Entries set ?', [req.body]);
    res.json({ message: 'Post Created' });
  }

  public async getPosts(req: Request, res: Response): Promise<any> {
    const posts = await pool.query('SELECT * FROM Blog_Entries;');
    res.json(posts);
  }
}

const gamesSiteController = new GamesSiteController();
export default gamesSiteController;
