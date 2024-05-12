const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const register = async ({ userName, password }) => {
  try {
    const user = await User.create({ userName, password });
    const token = jwt.sign({ id: user.id, userName }, "123", {
      expiresIn: "1d",
    });
    return {
      status: 201,
      data: {
        message: "User registered successfully",
        userId: user.id,
        userName,
        token,
      },
    };
  } catch (error) {
    return { status: 500, data: { message: "Error registering user" } };
  }
};

const login = async ({ userName, password }) => {
  try {
    const user = await User.findOne({ userName });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return {
        status: 401,
        data: { message: "Incorrect user name or password" },
      };
    }
    const token = jwt.sign({ id: user.id, userName: user.userName }, "123", {
      expiresIn: "1d",
    });
    return {
      status: 200,
      data: { token, userId: user.id, userName: user.userName },
    };
  } catch (error) {
    return { status: 500, data: { message: "Error logging in" } };
  }
};

module.exports = { register, login };
