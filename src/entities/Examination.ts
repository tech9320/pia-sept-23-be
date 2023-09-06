import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { ScheduledExamination } from "./ScheduledExamination";
import { Specialization } from "./Specialization";

@Entity("examination")
export class Examination extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column({
    default: "30min",
  })
  duration: string;

  @Column()
  price: number;

  @ManyToOne(
    () => Specialization,
    (specialization) => specialization.id
  )
  @JoinColumn({name: 'specialization_id'})
  specialization: Specialization

  @OneToMany(
    () => ScheduledExamination,
    (scheduledExamination) => scheduledExamination.examination.id
  )
  scheduledExaminations: ScheduledExamination;
}
