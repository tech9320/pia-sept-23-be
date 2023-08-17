import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { ScheduledExamination } from "./ScheduledExamination";

@Entity("report")
export class Report extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  diagnosis: string;

  @Column()
  therapy: string;

  @Column()
  controlDate: Date;

  @Column()
  controlTime: string;

  @ManyToOne(
    () => ScheduledExamination,
    (scheduledExamination) => scheduledExamination.reports
  )
  @JoinColumn({ name: "scheduledExaminationId" })
  scheduledExamination: ScheduledExamination;
}
