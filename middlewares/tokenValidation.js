import jwt from "jsonwebtoken";
import { userDao } from "../models";

const { JWT_SECRET_KEY } = process.env;

const validateToken = async (req, res, next) => {
  try {
    const accessToken = req.headers.authorization;

    if (!accessToken) {
      const err = new Error("TOKEN_REQUIRED");
      err.statusCode = 401;
      throw err;
    }

    const { userId } = jwt.verify(accessToken, JWT_SECRET_KEY);
    const foundUser = await userDao.findUserById(userId);

    if (!foundUser) {
      const err = new Error("INVALID_USER");
      err.statusCode = 400;
      throw err;
    }

    req.user = foundUser;
    next();
  } catch (err) {
    console.log(err);
  }
};

const validateAdminToken = async (req, res, next) => {
  try {
    const accessToken = req.headers.authorization;

    if (!accessToken) {
      const err = new Error("TOKEN_REQUIRED");
      err.statusCode = 401;
      throw err;
    }

    const { userId } = jwt.verify(accessToken, JWT_SECRET_KEY);
    const foundUser = await userDao.findUserById(userId);

    if (!foundUser) {
      const err = new Error("INVALID_USER");
      err.statusCode = 400;
      throw err;
    }

    if (!foundUser.userTypeId == 1) {
      const err = new Error("PERMISSION_DENIED");
      err.statusCode = 403;
      throw err;
    }

    req.admin = foundUser;
    next();
  } catch (err) {
    console.log(err);
  }
};

export { validateToken, validateAdminToken };
