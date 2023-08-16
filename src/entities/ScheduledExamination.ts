import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("scheduledExamination")
export class ScheduledExamination extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  reasonForComing: string;

  @Column()
  time: string;

  @Column()
  date: Date;

  @Column()
  price: number;

  @Column()
  patientId: number;

  @Column()
  examinationId: number;
}
