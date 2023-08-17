import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Examination } from "./Examination";
import { Patient } from "./Patient";
import { Report } from "./Report";

@Entity("scheduledExamination")
export class ScheduledExamination extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  reasonForComing: string;

  @Column()
  time: string;

  @Column()
  date: Date;

  @Column()
  price: number;

  @ManyToOne(
    () => Examination,
    (examination) => examination.scheduledExaminations
  )
  @JoinColumn({ name: "examinationId" })
  examination: Examination;

  @ManyToOne(() => Patient, (patient) => patient.scheduledExaminations)
  @JoinColumn({ name: "patientId" })
  patient: Patient;

  @OneToMany(() => Report, (report) => report.scheduledExamination)
  reports: Report[];
}
