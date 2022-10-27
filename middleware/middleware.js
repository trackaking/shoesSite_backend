"use strict"

const { decodeBase64 } = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = process.env;
const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["access-token"];

  if (!token) {
    return res.status(403).send("Un jeton est requis pour l'authentification");
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    // un objet qui contient { username: "leusernamedelapersonnepresente"}
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Jeton Invalid");
  }
  return next();
};

module.exports = verifyToken;