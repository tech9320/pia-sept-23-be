import { Examination } from "../../entities/Examination";

const getExaminationsByDoctor = async (req: any, res: any) => {
  const id = parseInt(req.params.id);
  Examination.find({
    relations: [
      "doctor",
      "examinationType",
      "doctor.specialization",
      "examinationType.specialization",
    ],
  })
    .then((examinations) => {
      const filteredExaminations: Examination[] = [];
      examinations.forEach((examination) => {
        if (examination.doctor.id === id) {
          filteredExaminations.push(examination);
        }
      });
      if (filteredExaminations.length === 0) {
        res.status(200).json({ msg: "You don't have any examination." });
      } else {
        res.status(200).json({ filteredExaminations: filteredExaminations });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    });
};

export default getExaminationsByDoctor;
