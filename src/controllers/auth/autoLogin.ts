import { Patient } from "../../entities/Patient";
import Session from "../../entities/Session";
import { Doctor } from "../../entities/Doctor";
import { Manager } from "../../entities/Manager";


const autoLogin = async (req: any, res: any) => {
    const sessionId = req.cookies.sessionId;
    if(!sessionId) {
        return res.status(404).json({msg: 'Session not found.'});
    }

    try {
        const session = await Session.findOneBy({id: sessionId});
        if(session) console.log('expires at', new Date(session.expiresAt))
        if(session) console.log('new date', new Date())
        if(!session || new Date(session.expiresAt) < new Date()) {
            return res.status(404).json({msg: 'Session not found.'});
        }
        
        const { userId, userRole } = session;
        let user;
        if(userRole === 'patient') {
            user = await Patient.findOneBy({id: userId})
        }
        if(userRole === 'doctor') {
            user = await Doctor.createQueryBuilder('doctor')
            .innerJoinAndSelect('doctor.specialization', 'specialization')
            .getOne();
        }
        if(userRole === 'manager') {
            user = await Manager.findOneBy({id: userId})
        }

        if(!user) {
            await Session.delete({id: sessionId});
            return res.status(500).json({});
        }

        return res.status(200).json({role: userRole, data: user});
    }   
    catch (error) {
        
    }
}

export default autoLogin