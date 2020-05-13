const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'no token provider' });
    }
    
    const parts = authHeader.split(' ');
    if (!parts.length === 2) {
        return res.status(401).json({ error: 'token error' });
    }

    const [scheme, token] = parts;
    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).json({ error: 'token malformatted' });
    };

    jwt.verify(token, process.env.JWT_SECRET, (error, decode) => {
        if (error) {
            return res.status(401).json({ error: 'token invalid' });
        }

        req.userId = decode.id;
        return next();
    })
};