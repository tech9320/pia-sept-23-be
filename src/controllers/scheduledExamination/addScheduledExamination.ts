import { ScheduledExamination } from "../../entities/ScheduledExamination";

const addScheduledExamination = async (req: any, res: any) => {
  const { reasonForComing, time, date, patient, doctor, examination } = req.body;

  if (
    !reasonForComing ||
    !time ||
    !date ||
    !patient ||
    !doctor ||
    !examination
  ) {
    res.status(400).json({ msg: "Please fill out all required fields." });
    return;
  }

  try {
    // TODO: CHECK IF DOCTOR IS AVAILABLE
    const scheduledExamination = ScheduledExamination.create({
      reasonForComing,
      time,
      date,
      patient,
      doctor,
      examination,
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
