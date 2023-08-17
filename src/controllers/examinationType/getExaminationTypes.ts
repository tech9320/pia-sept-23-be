import { ExaminationType } from "../../entities/ExaminationType";

const getExaminationTypes = async (req: any, res: any) => {
  ExaminationType.find({
    relations: ["specialization"],
  })
    .then((examinationTypes) => {
      res.status(200).json({ examinationTypes: examinationTypes });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    });
};

export default getExaminationTypes;
