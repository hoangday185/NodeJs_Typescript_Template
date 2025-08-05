import { NextFunction, Request, RequestHandler, Response } from "express";

export const wrapAsync = <P>(func: RequestHandler<P, any, any, any>) => {
  return async (req: Request<P>, res: Response, next: NextFunction) => {
    //tạo ra cấu trúc try catch
    // func(res, req, next)
    try {
      await func(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
