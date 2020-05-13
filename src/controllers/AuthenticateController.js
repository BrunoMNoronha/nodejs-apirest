const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const User = mongoose.model('User');

module.exports = {
    async index(req, res) {
        const { email, password } = req.body;
        const user = await User.findOne({email}).select('+password');

        if (!user) {
            return res.status(400).json({ error: 'user not found' });
        }

        if (!await bcrypt.compare(password, user.password)) {
            return res.status(400).json({ error: 'invalid password' });
        }

        user.password = undefined;

        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 86400});

        return res.json({user, token});
    }
};