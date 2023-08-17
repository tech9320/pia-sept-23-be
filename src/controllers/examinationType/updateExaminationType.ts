import { ExaminationType } from "../../entities/ExaminationType";

const updateExaminationType = async (req: any, res: any) => {
  const id = parseInt(req.params.id);
  const { type, specialization } = req.body;

  if (!type || !specialization) {
    res.status(400).json({ msg: "Please fill out all required fields." });
    return;
  }

  const examinationTypeById = await ExaminationType.findOneBy({
    id: id,
  });

  if (!examinationTypeById) {
    res
      .status(400)
      .json({ msg: "The examination type id you entered does not exist." });
    return;
  } else {
    ExaminationType.update(id, {
      type,
      specialization,
    })
      .then(() => {
        res
          .status(200)
          .json({ msg: "Examination type was successfully updated." });
      })
      .catch((err) => {
        res
          .status(500)
          .json({ msg: "Something went wrong. Please try again later." });
        console.log("err", err);
      });
  }
};

export default updateExaminationType;
