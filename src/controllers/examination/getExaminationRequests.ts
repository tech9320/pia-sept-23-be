import { Doctor } from "../../entities/Doctor";

export const getExaminationRequests = async (req: any, res: any) => {
    try{ 
        const requests = await Doctor.find({relations: ['examinationRequests']});
        res.status(200).json(requests)
    }
    catch {
        res.status(500).json({msg: 'Something went wrong. Please try again later.'});
    }
}

export default getExaminationRequests;