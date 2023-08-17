import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import { Doctor } from "./Doctor";
import { ExaminationType } from "./ExaminationType";

@Entity("specialization")
export class Specialization extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @OneToMany(() => Doctor, (doctor) => doctor.specialization)
  doctors: Doctor[];

  @OneToMany(
    () => ExaminationType,
    (examinationType) => examinationType.specialization
  )
  examinationTypes: ExaminationType[];
}
