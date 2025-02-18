import mongoose from "mongoose";

export async function connectDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/albumsDB", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connecté !");
    } catch (error) {
        console.error("Erreur de connexion à  la plateforme MongoDB :", error);
        process.exit(1);
    }
}


