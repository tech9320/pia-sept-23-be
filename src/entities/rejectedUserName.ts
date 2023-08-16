import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("rejectedUserName")
export class RejectedUserName extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  userName: string;
}
