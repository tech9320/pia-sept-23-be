import connectDB from "./db/connection";
import express from "express";
const app = express();

import { patientRouter } from "./routes/patient";
import { doctorRouter } from "./routes/doctor";
import { examinationTypeRouter } from "./routes/examinationType";
import { specializationRouter } from "./routes/specialization";
import { examinationRouter } from "./routes/examination";
import { notificationRouter } from "./routes/notification";
import { messageToManagertRouter } from "./routes/messageToManager";
import { reportRouter } from "./routes/report";
import notFoundMiddleware from "./middleware/notFound";

// middleware
app.use(express.json());
app.use(
  "/api/v1/",
  patientRouter,
  doctorRouter,
  examinationTypeRouter,
  specializationRouter,
  examinationRouter,
  notificationRouter,
  messageToManagertRouter,
  reportRouter
);
app.use(notFoundMiddleware);

const port = 5005;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
connectDB;
