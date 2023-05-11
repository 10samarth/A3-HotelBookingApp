const express = require('express');
const router = express.Router();
const User = require('../database/user_table');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'testingtesting'; 

const generateToken = (userId) => {
  const token = jwt.sign({ id: userId }, JWT_SECRET, {
    expiresIn: '2h', 
  });
  return token;
};

const authenticateUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user_password = await User.findOne({ Email: email });
  const user = await User.findOne(
    { Email: email },
    { Email: 1, name: 1, role: 1, user_id: 1 }
  );
  console.log(user);
  if (user_password && (await user_password.matchPassword(password))) {
    const token = generateToken(user.user_id);
    console.log("#########################################")
    res.json({
      email: user.Email,
      name: user.name,
      role: user.role,
      token: token,
    });
  } else {
    res.status(200);
    throw new Error('Invalid email or password');
  }
});

const createUser = asyncHandler(async (req, res) => {
  const {name, Email, password, PhoneNumber, role } = req.body;
  const userExists = await User.findOne({ Email });

  if (userExists) {
    res.status(400).json({ result: 'user exists' });
    throw new Error('user exists');
  }
  const maxUserId = await User.find().sort({ user_id: -1 }).limit(1);
  const user_id = maxUserId.length ? maxUserId[0].user_id + 1 : 1;
  const user = await User.create({
    user_id,
    name,
    Email,
    PhoneNumber,
    role,
    password,
  });

  if (user) {
    res.status(201).json({
      result:"Created"
    });
  } else {
    res.status(400);
  }
});

router.use(express.json());
router.post('/login', authenticateUser);
router.post('/register', createUser);

module.exports = router;
