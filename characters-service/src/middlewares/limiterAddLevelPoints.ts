import { Request, Response, NextFunction } from 'express';


const limiter = parseInt(`${process.env.ADD_POINT_LIMITER}`);

function limiterAddLevelPoints(req: Request, res: Response, next: NextFunction) {
  try {
    const { Strength, Dexterity, Vitality, Energy, Leadership } = req.body;
    if ( Strength   > limiter ||
         Dexterity  > limiter ||
         Vitality   > limiter ||
         Energy     > limiter ||
         Leadership > limiter) return res.status(400).json({ error : 'You cannot distribute all these points.' }).end();
    next();
  } catch (error) {
    return console.log(error);
  }

}

export { limiterAddLevelPoints }