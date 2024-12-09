import { NextFunction, Request, Response } from "express";
import { registerService } from "../services/auth/register.service";
import { loginService } from "../services/auth/login.service";
import { forgotPasswordService } from "../routes/forgot-password.service";

export const registerController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const result = await registerService(request.body);
    response.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const loginController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const result = await loginService(request.body);
    response.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const forgotPasswordController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const result = await forgotPasswordService(request.body);
    response.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
