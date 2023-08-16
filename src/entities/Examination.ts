import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("examination")
export class Examination extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  examinationTypeId: number;

  @Column({
    default: "30min",
  })
  duration: string;

  @Column()
  doctorId: string;
}
