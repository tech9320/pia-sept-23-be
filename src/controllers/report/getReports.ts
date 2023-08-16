import { Report } from "../../entities/Report";

const getReports = async (req: any, res: any) => {
  Report.find()
    .then((reports) => {
      res.status(200).json({ reports: reports });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    });
};

export default getReports;
