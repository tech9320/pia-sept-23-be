import { Patient } from "../../entities/Patient";
import { PendingRegistration } from "../../entities/PendingRegistration";

const acceptPendingRegistration = async (req: any, res: any) => {
    const { id } = req.body;
    try {
        const pendingRegistration = await PendingRegistration
        .createQueryBuilder('request')
        .addSelect('request.password')
        .where(`request.id = ${id}`)
        .getOne();
        const patient = Patient.create({...pendingRegistration});
        await patient.save();
        await PendingRegistration.delete(id);
        res.status(201).json({msg: 'success'});
    }
    catch (e) {
        console.log(e)
        res.status(500).json({ msg: "Something went wrong. Please try again later." })
    }
}

export default acceptPendingRegistration