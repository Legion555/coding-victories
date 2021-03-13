import dbConnect from '../../../utils/dbConnect.js'
import User from '../../../models/User'

export default async function handler(req, res) {
    await dbConnect()
    try {
        User.find( 
            { },
            { victories: 1 },
            (err, result) => {
                if (err) {
                    res.status(500).res.send(err);
                } else {
                    res.send(result);
                }
            }
        );
    } catch (error) {
        res.status(400).json({ success: false })
        res.end();
    }
}