const userCtrl = {};

userCtrl.getUsers = (req,res) => res.json({message: 'Get users'});

userCtrl.createUser = (req,res) => res.json({message: 'user created'});

userCtrl.deleteUser = (req,res) => res.json({message: 'delete user'});

userCtrl.updateUser = (req,res) => res.json({message: 'Update user'});

module.exports = userCtrl;