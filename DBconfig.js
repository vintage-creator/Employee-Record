const mongoose = require("mongoose");

const formdataDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.0yuc9xu.mongodb.net/${process.env.MONGODB_NAME}?retryWrites=true&w=majority`, {

        });
    } catch (error) {
        console.error(error)
    }
}

module.exports = formdataDB