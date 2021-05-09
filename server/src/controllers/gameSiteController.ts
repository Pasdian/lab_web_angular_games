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

  // Games Methods
  public async listGames(req: Request, res: Response): Promise<any> {
    const games = await pool.query('SELECT * FROM games;');
    res.json(games);
  }

  public async getGame(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const games = await pool.query('SELECT * FROM games where gameID = ?', [
      id]);
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
    const consoles = await pool.query(
      'SELECT * FROM consoles WHERE consoleName LIKE %?% ',
      [req.body]
    );
    // if (consoles.length > 0) {
    //   return res.json(consoles);
    // }
    // res.status(404).json({ message: 'Console does not exist' });
    return res.json(consoles);
  }

  public async findGame(req: Request, res: Response): Promise<any> {
    const { searchWords } = req.params;
    const consoles = await pool.query(
      'SELECT * FROM games WHERE gameName LIKE "?"',
      [searchWords]
    );
    if (consoles.length > 1) {
      return res.json(consoles);
    } else if (consoles.length == 1) {
      return res.json(consoles[0]);
    }
    res.status(404).json({ message: 'Console does not exist' });
  }
}

const gamesSiteController = new GamesSiteController();
export default gamesSiteController;
