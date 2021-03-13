import mongoose from 'mongoose'

async function dbConnect() {
    if (process.env.NODE_ENV == 'development') {
        let mongoDBUri = process.env.NEXT_PUBLIC_MONGODB_URI
    } else {
        let mongoDBUri = process.env.MONGODB_URI
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