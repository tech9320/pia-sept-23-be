import { Entity, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Manager } from "./Manager";
import { MessageToManager } from "./MessageToManager";
import { Specialization } from "./Specialization";
import { Examination } from "./Examination";

@Entity("doctor")
export class Doctor extends Manager {
  @Column({
    nullable: true,
  })
  profilePic: string;

  @Column({
    unique: true,
  })
  licenceNumber: string;

  @Column()
  officeDepartment: string;

  @ManyToOne(() => Specialization, (specialization) => specialization.doctors)
  @JoinColumn({ name: "specializationId" })
  specialization: Specialization;

  @OneToMany(() => MessageToManager, (message) => message.doctor)
  messages: MessageToManager[];

  @OneToMany(() => Examination, (examination) => examination.doctor)
  examinations: Examination[];
}
