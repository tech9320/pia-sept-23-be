import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("rejectedEmail")
export class RejectedEmail extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
  })
  email: string;
}
