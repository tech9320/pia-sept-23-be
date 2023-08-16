import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("report")
export class Report extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  examinationId: number;

  @Column()
  doctorId: number;

  @Column()
  patientId: number;

  @Column()
  diagnosis: string;

  @Column()
  therapy: string;

  @Column()
  controlDate: Date;

  @Column()
  controlTime: string;
}
