import { Examination } from "../../entities/Examination";
import { Doctor } from "../../entities/Doctor";

export const addExaminationToDoctor = async (req: any, res: any) => {
    const { examinationId, doctorId } = req.body;
    if(!examinationId || !doctorId){
        return res.status(400).json({msg: "Please fill out all required fields."});
    }

    try {
        const doctor = await Doctor.findOneBy({id: doctorId});
        if(!doctor) {
            return res.status(404).json({msg: "Doctor with given id was not found."});
        }

        const examination = await Examination.findOneBy({id: examinationId});
        if(!examination) {
            return res.status(404).json({msg: "Examination with given id was not found."});
        }

        if(doctor.examinations) {
            doctor.examinations.push(examination);
        }
        else {
            doctor.examinations = [examination];
        }
        
        await doctor.save();
        return res.status(200).json({msg: 'added'});
    }
    catch(error) {
        return res.status(400).json({msg: 'Something went wrong. Please try again later.'});
    }
}

export default addExaminationToDoctor