import { RejectedUserName } from "../../entities/rejectedUserName";

const addRejectedUserName = async (req: any, res: any) => {
  const { userName } = req.body;

  if (!userName) {
    res.status(400).json({ msg: "Please enter the username." });
    return;
  }

  try {
    const rejectedUserName = RejectedUserName.create({
      userName,
    });
    await rejectedUserName.save();
    res
      .status(201)
      .json({ msg: "Rejected username was successfully created." });
  } catch (err) {
    res
      .status(500)
      .json({ msg: "Something went wrong. Please try again later." });
    console.log("err", err);
  }
};

export default addRejectedUserName;
