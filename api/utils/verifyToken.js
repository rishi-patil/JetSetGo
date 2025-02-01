import jwt from "jsonwebtoken";
import { createError } from "./error.js";


//verifying authentication
export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;  //fetching token from cookies
  if (!token) {
    return next(createError(401, "You are not authenticated!"))  //absence of token indicates not authenticated
  }

  //middleware

  jwt.verify(token, process.env.JWT, (err, user) => {   //secretkey verification
    if (err) return next(createError(403, "Invalid Token!"))
    req.user = user;
    next()
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    }
    else {
      return next(createError(403, "You are not authorized!"));
    }
  })
}

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    }
    else {
      return next(createError(403, "You are not authorized!"));
    }
  })
}