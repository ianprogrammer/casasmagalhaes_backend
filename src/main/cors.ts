import { Request, Response, NextFunction } from 'express'

export const cors = function (req: Request, res: Response, next: NextFunction) {
  let origin = req.headers.origin

  if (origin === 'http://localhost:3000' ) {
    res.header("Access-Control-Allow-Origin", origin); // restrict it to the required domain
  }
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization ");
  next();
}