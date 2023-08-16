import { RejectedEmail } from "../../entities/rejectedEmail";

const addRejectedEmail = async (req: any, res: any) => {
  const { email } = req.body;

  if (!email) {
    res.status(400).json({ msg: "Please enter the email." });
    return;
  }

  try {
    const rejectedEmail = RejectedEmail.create({
      email,
    });
    await rejectedEmail.save();
    res.status(201).json({ msg: "Rejected email was successfully created." });
  } catch (err) {
    res
      .status(500)
      .json({ msg: "Something went wrong. Please try again later." });
    console.log("err", err);
  }
};

export default addRejectedEmail;
