import { PendingRegistration } from "../../entities/PendingRegistration";

const addPendingRegistration = async (req: any, res: any) => {
  const {
    userName,
    password,
    firstName,
    lastName,
    address,
    phone,
    email,
    profilePic,
  } = req.body;

  if (
    !userName ||
    !password ||
    !firstName ||
    !lastName ||
    !address ||
    !phone ||
    !email ||
    !profilePic
  ) {
    res.status(400).json({ msg: "Please fill out all required fields." });
    return;
  }
    try {
      const pendingRegistration = PendingRegistration.create({
        userName,
        password,
        firstName,
        lastName,
        address,
        phone,
        email,
        profilePic,
      });
      await pendingRegistration.save();
      res.status(201).json({ msg: "Registration pending." });
    } catch (err) {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    }
};

export default addPendingRegistration;
