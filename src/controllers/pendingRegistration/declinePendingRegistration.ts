import { PendingRegistration } from "../../entities/PendingRegistration";
import { RejectedEmail } from "../../entities/rejectedEmail";
import { RejectedUserName } from "../../entities/rejectedUserName";

const declinePendingRegistration = async (req: any, res: any) => {
    const { id } = req.body;

    try{
        const pendingRegistration = await PendingRegistration.findOneBy(id);
        await RejectedUserName.create({ userName: pendingRegistration?.userName }).save();
        await RejectedEmail.create({ email: pendingRegistration?.email }).save();
        await PendingRegistration.delete(id);
        res.status(201).json({msg: 'success'});
    }
    catch (error) {
        res.send(500).json({ msg: 'Something went wrong. Please try again later.' });
    }
}

export default declinePendingRegistration;