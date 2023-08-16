import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("specialization")
export class Specialization extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;
}
