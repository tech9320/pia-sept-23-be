import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("notification")
export class Notification extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: false,
  })
  read: boolean;

  @Column()
  message: string;

  @Column()
  patientId: number;
}
