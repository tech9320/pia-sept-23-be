import { Entity, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Manager } from "./Manager";
import { MessageToManager } from "./MessageToManager";
import { Specialization } from "./Specialization";
import { ScheduledExamination } from "./ScheduledExamination";

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
  @JoinColumn({name: "specialization_id"})
  specialization: Specialization;

  @OneToMany(() => MessageToManager, (message) => message.doctor)
  messages: MessageToManager[];

  @OneToMany(() => ScheduledExamination, (examination) => examination.doctor)
  scheduledExaminations: ScheduledExamination[];
}
