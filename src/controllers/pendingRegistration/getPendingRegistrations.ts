import { PendingRegistration } from "../../entities/PendingRegistration"

const getPendingRegistrations = async (req: any, res: any) => {
    try {
        const pendingRegistrations = await PendingRegistration.find();
        if(pendingRegistrations) res.status(200).json(pendingRegistrations)
    }
    catch(error) {
        res.status(500).json({mgs: 'Something went wrong. Please try again later.'});
    }
}

export default getPendingRegistrations;