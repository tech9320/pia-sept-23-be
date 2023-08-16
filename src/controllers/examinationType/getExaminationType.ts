import { ExaminationType } from "../../entities/ExaminationType";

const getExaminationType = async (req: any, res: any) => {
  const id = parseInt(req.params.id);
  ExaminationType.findOneBy({
    id: id,
  })
    .then((examinationType) => {
      if (!examinationType) {
        res
          .status(404)
          .json({ msg: "The examination type id you entered does not exist." });
        return;
      } else {
        res.status(200).json({ examinationType: examinationType });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    });
};

export default getExaminationType;
