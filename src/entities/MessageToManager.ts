import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import { Doctor } from "./Doctor";

@Entity("messageToManager")
export class MessageToManager extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  doctorId: number;

  @Column()
  message: string;

  @ManyToOne(() => Doctor, (doctor) => doctor.messages)
  doctor: Doctor;
}
