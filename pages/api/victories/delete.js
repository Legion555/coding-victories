import dbConnect from '../../../utils/dbConnect.js'
import User from '../../../models/User'

export default async function handler(req, res) {
    await dbConnect()
    try {
        User.findOneAndUpdate(
            { _id: req.body.userId },
            { $pull: { victories: {_id: req.body.victoryId}}}, 
            {returnOriginal: false},
            function(err, result) {
              if (err) {
                res.send(err);
                res.end();
              } else {
                res.send(result);
                res.end();
              }
            }
          );
    } catch (error) {
        res.status(400).json({ success: false })
        res.end();
    }
}