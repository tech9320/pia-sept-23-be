import { Manager } from "../../entities/Manager";

const addManager = async (req: any, res: any) => {
  const { userName, password, firstName, lastName, address, phone, email } =
    req.body;

  if (
    !userName ||
    !password ||
    !firstName ||
    !lastName ||
    !address ||
    !phone ||
    !email
  ) {
    res.status(400).json({ msg: "Please fill out all required fields." });
    return;
  }

  try {
    const manager = Manager.create({
      userName,
      password,
      firstName,
      lastName,
      address,
      phone,
      email,
    });
    await manager.save();
    res.status(201).json({ msg: "Manager was successfully created." });
  } catch (err) {
    res
      .status(500)
      .json({ msg: "Something went wrong. Please try again later." });
    console.log("err", err);
  }
};

export default addManager;
