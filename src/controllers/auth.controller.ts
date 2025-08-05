import { Request, Response } from "express";

export const registerController = async (req: Request, res: Response) => {
  // Logic for user registration
  res.status(201).json({ message: "User registered successfully" });
};

export const loginController = async (req: Request, res: Response) => {
  // Logic for user login
  res.status(200).json({ message: "User logged in successfully" });
};
