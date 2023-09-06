import { Examination } from "../../entities/Examination";
import { Doctor } from "../../entities/Doctor";

const getExaminationsByDoctor = async (req: any, res: any) => {
  const id = +req.params.id;
  const doctor = await Doctor.findOne({
    where: { id },
    relations: ["specialization"],
  });
  if(!doctor) return res.status(404).json({msg: 'Doctor with the given id was not found.'});

  const examinations = await Examination.createQueryBuilder('examinations').
    where(`specialization_id = ${doctor.specialization.id}`).getMany();
  
    return res.status(200).json(examinations);
};

export default getExaminationsByDoctor;
