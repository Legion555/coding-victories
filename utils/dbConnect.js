import mongoose from 'mongoose'

async function dbConnect() {
    let mongoDBUri = process.env.NEXT_PUBLIC_MONGODB_URI
    if (process.env.NEXT_PUBLIC_NODE_ENV == 'production' || process.env.NODE_ENV == 'production') {
        mongoDBUri = process.env.MONGODB_URI
    }

    if (mongoose.connection.readyState >= 1) {
        return
    }

    return mongoose.connect(mongoDBUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
}

export default dbConnect