import { Entity, Column, CreateDateColumn } from "typeorm";
import { Manager } from "./Manager";

@Entity("patient")
export class Patient extends Manager {
  @Column({
    nullable: true,
  })
  profilePic: string;

  @CreateDateColumn()
  createdAt: Date;
}
