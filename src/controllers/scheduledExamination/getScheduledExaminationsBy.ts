import { ScheduledExamination } from "../../entities/ScheduledExamination";

const getScheduledExaminationsBy = async (req: any, res: any) => {
  const id = parseInt(req.params.id);
  const path = req.route.path.split("/");
  const type = path[2];

  ScheduledExamination.find({
    relations: [
      "patient",
      "examination",
      "doctor"
    ],
    order: {date: 'ASC', time: 'ASC'}
  },)
    .then((scheduledExaminations) => {
      const filteredScheduledExaminations: ScheduledExamination[] = [];
      scheduledExaminations.forEach((scheduledExamination) => {
        if (type === "patient") {
          if (scheduledExamination.patient.id === id) {
            filteredScheduledExaminations.push(scheduledExamination);
          }
        } else if (type === "doctor") {
          if (scheduledExamination.doctor.id === id) {
            filteredScheduledExaminations.push(scheduledExamination);
          }
        }
      });
      if (filteredScheduledExaminations.length === 0) {
        res
          .status(200)
          .json({ msg: "You don't have any scheduled examination." });
      } else {
        res.status(200).json({
          filteredScheduledExaminations: filteredScheduledExaminations,
        });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    });
};

export default getScheduledExaminationsBy;
