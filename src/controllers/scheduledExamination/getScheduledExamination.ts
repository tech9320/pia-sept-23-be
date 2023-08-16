import { ScheduledExamination } from "../../entities/ScheduledExamination";

const getScheduledExamination = async (req: any, res: any) => {
  const id = parseInt(req.params.id);
  ScheduledExamination.findOneBy({
    id: id,
  })
    .then((scheduledExamination) => {
      if (!scheduledExamination) {
        res.status(404).json({
          msg: "The scheduled examination id you entered does not exist.",
        });
        return;
      } else {
        res.status(200).json({ scheduledExamination: scheduledExamination });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    });
};

export default getScheduledExamination;
