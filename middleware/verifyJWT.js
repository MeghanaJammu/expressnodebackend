const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers.Authorization;

  console.log("🟡 Incoming Auth Header:", authHeader);

  if (!authHeader?.startsWith("Bearer ")) {
    console.log("❌ Missing token or not Bearer");
    return res.status(401).send("Access denied, token missing");
  }

  const accessToken = authHeader.split(" ")[1];

  console.log("🟠 ACCESS_TOKEN_SECRET:", process.env.ACCESS_TOKEN_SECRET);
  console.log("🟠 Access Token:", accessToken);

  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log("❌ JWT VERIFY ERROR:", err.message); // ✅ LOG THIS
      return res.status(403).send("Invalid token");
    }

    if (!decoded?.userInfo) {
      console.log("❌ userInfo missing in token");
      return res.status(403).send("Invalid token payload");
    }

    console.log("✅ Token Verified. User:", decoded.userInfo.username);

    req.user = decoded.userInfo.username;
    req.roles = decoded.userInfo.roles;
    next();
  });
};

module.exports = verifyJWT;
