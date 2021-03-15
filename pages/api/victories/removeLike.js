import dbConnect from '../utils/dbConnect.js'
import User from '../../../models/User'

export default async function handler(req, res) {
    await dbConnect()
    try {
        User.findOneAndUpdate(
            { _id: req.body.authorId, 'victories._id': req.body.victoryId },
            { $inc: { 'victories.$.likes': -1 } },
            {returnOriginal: false},
            (err, result) => {
                if (err) {
                    res.send(err);
                    res.end();
                } else {
                    User.findOneAndUpdate(
                        { _id: req.body.userId },
                        { $pull: {
                            likes: {
                                _id: req.body.victoryId,
                                }
                            }
                        },
                        {returnOriginal: false},
                        (err, result) => {
                            if (err) {
                                res.send(err);
                                res.end();
                            } else {
                                res.send(result);
                                res.end();
                            }
                        }
                    )
                }
            }
        );
    } catch (error) {
        res.status(400).json({ success: false })
        res.end();
    }
}