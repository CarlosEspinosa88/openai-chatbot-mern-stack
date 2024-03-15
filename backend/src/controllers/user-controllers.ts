import { Request, Response, NextFunction } from "express"
import User from "../models/User.js";

export const getAllusers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.find()
    return res.status(200).json({ messages: "OK", users})
  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: "ERROR", cause:  error.message})
  }
}