const jwt = require('jsonwebtoken');
const User = require('../models/User');

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  // Find user by username
  const user = await User.findOne({ username });

  if (!user || !(await user.comparePassword(password))) {
    return res.status(400).json({ message: 'Invalid User' });
  }

//   Generate JWT token
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '30m' });

  res.json({ token });
};

module.exports = loginUser;
