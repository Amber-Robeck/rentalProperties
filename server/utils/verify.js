import jwt from "jsonwebtoken";

export const verify = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return next();
    };

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return next(err);
        } else {
            req.user = user;
            next();
        };
    })
};