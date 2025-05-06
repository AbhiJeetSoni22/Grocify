import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
    const { token } = req.cookies ;
    

    if (!token) {
        return res.status(200).json({ success: false, message: "Unauthorized" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        

        if (decoded.id) {
            req.body = req.body || {}; // Ensure req.body is defined
            req.body.userId = decoded.id;
         
        } else {
            return res.status(200).json({ success: false, message: "Unauthorized" });
        }
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ success: false, message: error.message });
    }
};

export default authUser;