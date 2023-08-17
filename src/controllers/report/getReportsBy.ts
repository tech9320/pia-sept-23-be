import { Report } from "../../entities/Report";

const getReportsBy = async (req: any, res: any) => {
  const id = parseInt(req.params.id);
  const path = req.route.path.split("/");
  const type = path[2];

  Report.find({
    relations: [
      "scheduledExamination",
      "scheduledExamination.patient",
      "scheduledExamination.examination",
      "scheduledExamination.examination.doctor.specialization",
      "scheduledExamination.examination.examinationType",
      "scheduledExamination.examination.examinationType.specialization",
    ],
  })
    .then((reports) => {
      const filteredReports: Report[] = [];
      reports.forEach((report) => {
        if (type === "patient") {
          if (report.scheduledExamination.patient.id === id) {
            filteredReports.push(report);
          }
        } else if (type === "doctor") {
          if (report.scheduledExamination.examination.doctor.id === id) {
            filteredReports.push(report);
          }
        }
      });
      if (filteredReports.length === 0) {
        res.status(200).json({ msg: "You don't have any reports." });
      } else {
        res.status(200).json({ reports: filteredReports });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    });
};

export default getReportsBy;
