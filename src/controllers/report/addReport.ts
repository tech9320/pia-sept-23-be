import { Report } from "../../entities/Report";

const addReport = async (req: any, res: any) => {
  const {
    examinationId,
    doctorId,
    patientId,
    diagnosis,
    therapy,
    controlDate,
    controlTime,
  } = req.body;

  if (
    !examinationId ||
    !doctorId ||
    !patientId ||
    !diagnosis ||
    !therapy ||
    !controlDate ||
    !controlTime
  ) {
    res.status(400).json({ msg: "Please fill out all required fields." });
    return;
  }

  try {
    const report = Report.create({
      examinationId,
      doctorId,
      patientId,
      diagnosis,
      therapy,
      controlDate,
      controlTime,
    });
    await report.save();
    res.status(201).json({ msg: "Report was successfully created." });
  } catch (err) {
    res
      .status(500)
      .json({ msg: "Something went wrong. Please try again later." });
    console.log("err", err);
  }
};

export default addReport;
