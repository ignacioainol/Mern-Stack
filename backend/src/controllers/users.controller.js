const userCtrl = {};

const User = require('../models/User');

userCtrl.getUsers = async (req,res) => {
    const users = await User.find();
    res.json(users);
}

userCtrl.getUser = async (req,res) => {
    const id = req.params.id;
    const user = await User.findById(id);
    res.json(user);
}

userCtrl.createUser = async (req,res) => {
    const { username } = req.body;
    const newUser = new User({
        username
    });

    await newUser.save();
    res.json({message: 'User Created'});
}

userCtrl.deleteUser = async  (req,res) => {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    res.json({message: 'Delete user'});
}

userCtrl.updateUser = async  (req,res) => {
    const { username } = req.body;
    await User.findOneAndUpdate({_id: req.params.id },{
        username
    });
    res.json({message: 'Update user'});
}

module.exports = userCtrl;