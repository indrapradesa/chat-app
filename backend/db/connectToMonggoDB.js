import mongoose from "mongoose";

const connectToMonggoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGGO_DB_URL);
        console.log("Connect to Mongoose");
    } catch (error) {
        console.error(error.message);
    }
};

export default connectToMonggoDB;