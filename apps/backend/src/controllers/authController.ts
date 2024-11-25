import { Request, Response } from 'express';

class AuthController {
  async register(req: Request, res: Response) {
    res.json(req.body);
  }
}

export { AuthController };
