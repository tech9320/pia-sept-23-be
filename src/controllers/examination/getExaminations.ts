import { Examination } from "../../entities/Examination";

const getExaminations = async (req: any, res: any) => {
  Examination.find()
    .then((examinations) => {
      res.status(200).json({ examinations: examinations });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    });
};

export default getExaminations;
