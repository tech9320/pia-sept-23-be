import { ExaminationType } from "../../entities/ExaminationType";

const addExaminationType = async (req: any, res: any) => {
  const { type, specializationId } = req.body;

  if (!type || !specializationId) {
    res.status(400).json({ msg: "Please fill out all required fields." });
    return;
  }

  try {
    const examinationType = ExaminationType.create({
      type,
      specializationId,
    });
    await examinationType.save();
    res.status(201).json({ msg: "Examination type was successfully created." });
  } catch (err) {
    res
      .status(500)
      .json({ msg: "Something went wrong. Please try again later." });
    console.log("err", err);
  }
};

export default addExaminationType;
