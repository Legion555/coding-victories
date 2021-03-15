import dbConnect from '../utils/dbConnect.js'
import User from '../../../models/User'

export default async function handler(req, res) {
    await dbConnect()
    try {
        User.find( {_id: req.body._id},
            (err, result) => {
                if (err) {
                  res.send(err);
                } else {
                  res.send(result);
                }
              })
    } catch (error) {
        res.status(400).json({ success: false })
        return resolve();
    }
}