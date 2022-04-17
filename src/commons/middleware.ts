import { NextFunction } from "express";

export function globalMiddleware(req: Request, res: Response, next: NextFunction) {
    console.log('#1. Globally bound middleware');
    next();
}

export function moduleMiddleware(req: Request, res: Response, next: NextFunction) {
    console.log('#2. Module bound middleware');
    next();
}