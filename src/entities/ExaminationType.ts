import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Specialization } from "./Specialization";

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
}
