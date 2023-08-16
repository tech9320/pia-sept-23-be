import { Notification } from "../../entities/Notification";

const getNotifications = async (req: any, res: any) => {
  Notification.find()
    .then((notification) => {
      res.status(200).json({ examinations: notification });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ msg: "Something went wrong. Please try again later." });
      console.log("err", err);
    });
};

export default getNotifications;
