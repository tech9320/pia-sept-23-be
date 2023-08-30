import { Examination } from "../../entities/Examination";

const addExamination = async (req: any, res: any) => {
  const { duration, doctor, examinationType, price } = req.body;

  if (!doctor || !examinationType) {
    res.status(400).json({ msg: "Please fill out all required fields." });
    return;
  }

  try {
    const examination = Examination.create({
      duration,
      doctor,
      examinationType,
      price
    });
    await examination.save();
    res.status(201).json({ msg: "Examination was successfully created." });
  } catch (err) {
    res
      .status(500)
      .json({ msg: "Something went wrong. Please try again later." });
    console.log("err", err);
  }
};

export default addExamination;
