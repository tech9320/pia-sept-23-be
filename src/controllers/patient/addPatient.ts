import { Patient } from "../../entities/Patient";
import { RejectedUserName } from "../../entities/rejectedUserName";
import { RejectedEmail } from "../../entities/rejectedEmail";

const addPatient = async (req: any, res: any) => {
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

  const patientByUserName = await Patient.findOneBy({
    userName: userName,
  });

  const patientByEmail = await Patient.findOneBy({
    email: email,
  });

  const rejectedUserName = await RejectedUserName.findOneBy({
    userName: userName,
  });

  const rejectedEmail = await RejectedEmail.findOneBy({
    email: email,
  });

  if (
    !patientByEmail &&
    !patientByUserName &&
    !rejectedUserName &&
    !rejectedEmail
  ) {
    try {
      const patient = Patient.create({
        userName,
        password,
        firstName,
        lastName,
        address,
        phone,
        email,
        profilePic,
      });
      await patient.save();
      res.status(201).json({ msg: "Patient was successfully created." });
    } catch (err) {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    }
  } else if (patientByUserName) {
    res.status(400).json({ msg: "Patient with this username already exist." });
    return;
  } else if (patientByEmail) {
    res.status(400).json({ msg: "Patient with this email already exist." });
  } else if (rejectedUserName) {
    res.status(400).json({ msg: "Patient with this username was rejected." });
  } else if (rejectedEmail) {
    res.status(400).json({ msg: "Patient with this email was rejected." });
  }
};

export default addPatient;
