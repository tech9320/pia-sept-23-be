import { DataSource } from "typeorm";
import { Patient } from "../entities/Patient";
import { Doctor } from "../entities/Doctor";
import { Manager } from "../entities/Manager";
import { Examination } from "../entities/Examination";
import { ScheduledExamination } from "../entities/ScheduledExamination";
import { Report } from "../entities/Report";
import { ExaminationType } from "../entities/ExaminationType";
import { Specialization } from "../entities/Specialization";
import { Notification } from "../entities/Notification";
import { MessageToManager } from "../entities/MessageToManager";
import { RejectedEmail } from "../entities/rejectedEmail";
import { RejectedUserName } from "../entities/rejectedUserName";

const connectDB = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "borismirkovic",
  password: "Varvarin369NEW",
  database: "pia-sept-23",
  entities: [
    Patient,
    Doctor,
    Manager,
    Examination,
    ScheduledExamination,
    Report,
    ExaminationType,
    Specialization,
    Notification,
    MessageToManager,
    RejectedEmail,
    RejectedUserName,
  ],
  synchronize: false,
});

connectDB
  .initialize()
  .then(() => {
    console.log("Connected to PostgreSQL...");
  })
  .catch((err) => {
    console.error(`Failed to Connected to PostgreSQL...`, err);
  });

export default connectDB;
