import { Column, Entity } from "typeorm";
import { Specialization } from "./Specialization";

@Entity("examinationType")
export class ExaminationType extends Specialization {
  @Column()
  specializationId: number;
}
