import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Specialization } from "./Specialization";
import { Examination } from "./Examination";

@Entity("examinationType")
export class ExaminationType extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => Specialization,
    (specialization) => specialization.examinationTypes
  )
  @JoinColumn({ name: "specializationId" })
  specialization: Specialization;

  @Column()
  type: string;

  @OneToMany(() => Examination, (examination) => examination.examinationType)
  examinations: Examination[];
}
