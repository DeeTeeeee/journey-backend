import { Request, Response } from "express";

export const createJourney = (req: Request, res: Response) => {
  console.log(req.body)
}