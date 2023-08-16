import { Examination } from "../../entities/Examination";

const updateExamination = async (req: any, res: any) => {
  const id = parseInt(req.params.id);
  const { doctorId, examinationTypeId } = req.body;

  if (!doctorId || !examinationTypeId) {
    res.status(400).json({ msg: "Please fill out all required fields." });
    return;
  }

  const examinationById = await Examination.findOneBy({
    id: id,
  });

  if (!examinationById) {
    res
      .status(400)
      .json({ msg: "The examination id you entered does not exist." });
    return;
  } else {
    Examination.update(id, {
      doctorId,
      examinationTypeId,
    })
      .then(() => {
        res.status(200).json({ msg: "Examination was successfully updated." });
      })
      .catch((err) => {
        res
          .status(500)
          .json({ msg: "Something went wrong. Please try again later." });
        console.log("err", err);
      });
  }
};

export default updateExamination;
