import jwt from "jsonwebtoken";

export const jwtVerify = (req, res, next) => {
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
    });
};

export const userVerify = (req, res, next) => {
    jwtVerify(req, res, next, () => {
        if (req.user.id === req.params.id) {
            next();
        } else {
            res
                .status(401)
                .json("Not allowed")
        }
    });
};

export const adminVerify = (req, res, next) => {
    jwtVerify(req, res, () => {
        if (req.user.isAdmin) {
            console.log(req.user);
            next();
            // console.log("this")
        } else {
            res
                .status(401)
                .json("Not allowed")
        }
    });
};