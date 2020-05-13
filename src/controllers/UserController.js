const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {
    async index(req, res) {
        const users = await User.find();
        return res.json(users);
    },


    async show(req, res) {
        const user = await User.findById(req.params.id);
        return res.json(user);
    },

    async store(req, res) {
        const { email } = req.body;
        try {
            if (await User.findOne({ email })) {
                return res.status(400).json({ error: 'user already exists' });
            }
            const user = await User.create(req.body);
            user.password = undefined;
            return res.json(user);
        } catch (error) {
            return res.status(400).json({ error: 'registration failed' });
        }
    },

    async update(req, res) {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(user);
    },

    async destroy(req, res) {
        await User.findByIdAndRemove(req.params.id);
        return res.send();
    }
};