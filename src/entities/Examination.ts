import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Doctor } from "./Doctor";
import { ScheduledExamination } from "./ScheduledExamination";

@Entity("examination")
export class Examination extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: "30min",
  })
  duration: string;

  @Column()
  examinationType: string;

  @ManyToOne(() => Doctor, (doctor) => doctor.examinations)
  @JoinColumn({ name: "doctorId" })
  doctor: Doctor;

  @OneToMany(
    () => ScheduledExamination,
    (scheduledExamination) => scheduledExamination.examination
  )
  scheduledExaminations: ScheduledExamination[];
}
