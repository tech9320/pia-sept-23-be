import { Examination } from "../../entities/Examination";

const addExamination = async (req: any, res: any) => {
  const { duration, doctorId, examinationTypeId } = req.body;

  if (!doctorId || !examinationTypeId) {
    res.status(400).json({ msg: "Please fill out all required fields." });
    return;
  }

  try {
    const examination = Examination.create({
      duration,
      doctorId,
      examinationTypeId,
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
