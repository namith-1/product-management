import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // process code 1 code means exit with failure, 0 means success
    }
    
};

// I am local Dev so i can connect to mongo direct
// diffrent auths can be set for outside users ot team members 