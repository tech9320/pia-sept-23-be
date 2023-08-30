import { Entity, Column } from "typeorm";
import { Manager } from "./Manager";

@Entity("pendingRegistration")
export class PendingRegistration extends Manager {
  @Column({
    nullable: true,
  })
  profilePic: string;
}
