import dbConnect from '../../../utils/dbConnect.js'
import User from '../../../models/User'

export default async function handler(req, res) {
    await dbConnect()
    try {
        User.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: {
                victories: {
                    _id: req.body._id,
                    title: req.body.title,
                    description: req.body.description,
                    date_created: req.body.date_created,
                    authorId: req.body.authorId,
                    author: req.body.author
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
        );
    } catch (error) {
        res.status(400).json({ success: false })
        res.end();
    }
}