import { ScheduledExamination } from "../../entities/ScheduledExamination";

const addScheduledExamination = async (req: any, res: any) => {
  const { reasonForComing, time, date, price, patientId, examinationId } =
    req.body;

  if (
    !reasonForComing ||
    !time ||
    !date ||
    !price ||
    !patientId ||
    !examinationId
  ) {
    res.status(400).json({ msg: "Please fill out all required fields." });
    return;
  }

  try {
    const scheduledExamination = ScheduledExamination.create({
      reasonForComing,
      time,
      date,
      price,
      patientId,
      examinationId,
    });
    await scheduledExamination.save();
    res
      .status(201)
      .json({ msg: "Scheduled Examination was successfully created." });
  } catch (err) {
    res
      .status(500)
      .json({ msg: "Something went wrong. Please try again later." });
    console.log("err", err);
  }
};

export default addScheduledExamination;
