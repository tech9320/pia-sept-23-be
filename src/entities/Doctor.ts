import { Entity, Column, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { Manager } from "./Manager";
import { MessageToManager } from "./MessageToManager";
import { Specialization } from "./Specialization";

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

  @OneToMany(() => MessageToManager, (message) => message.doctor)
  messages: MessageToManager[];

  @OneToOne(() => Specialization)
  @JoinColumn()
  specialization: Specialization;
}
