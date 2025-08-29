const BaseError = require("../errors/base.error");
const userModel = require("../models/user.model");
const mailService = require("../service/mail.service");

class AuthController {
  async login(req, res, next) {
    try {
      const { email } = req.body;
      await mailService.sendOtp(email);
      // const existUser = await userModel.findOne({ email });
      // if (existUser) {
      //   throw BaseError.BadRequest("User already exist", [
      //     { email: "User already exist" },
      //   ]);
      // }
      // const createUser = await userModel.create({ email });
      res.status(201).json({ email });
    } catch (error) {
      next(error);
    }
    // res.json({ email });
  }

  async verify(req, res) {
    const { email, otp } = req.body;

    res.json({ email, otp });
  }
}

module.exports = new AuthController();
