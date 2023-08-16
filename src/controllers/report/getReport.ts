import { Report } from "../../entities/Report";

const getReport = async (req: any, res: any) => {
  const id = parseInt(req.params.id);
  Report.findOneBy({
    id: id,
  })
    .then((report) => {
      if (!report) {
        res
          .status(404)
          .json({ msg: "The report id you entered does not exist." });
        return;
      } else {
        res.status(200).json({ report: report });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    });
};

export default getReport;
