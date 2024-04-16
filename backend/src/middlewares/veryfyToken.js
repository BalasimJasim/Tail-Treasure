import jwt from "jsonwebtoken";

// Verify token
const verifyToken = (req, res, next) => {
  const token = req.headers.token;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: "invalid token" });
    }
  } else {
    res.status(401).json({ message: "no token provided" });
  }
};

// Verify token and authorize user
const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user._id === req.params.id || req.user.isAdmin) {
      next(); //  nex MW
    } else {
      res.status(403).json({ message: "unauthorized access" });
    }
  });
};

export { verifyToken, verifyTokenAndAuthorization };

/// this function does not work properly!!
// when
