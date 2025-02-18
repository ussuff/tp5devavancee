import Fastify from "fastify";
import { readFileSync } from "fs";
import {connectDB} from "./databases/mongodb.js";
import {routes} from "./routes.js";

const fastify = Fastify({
    https: {
        key: readFileSync("./key.pem"),
        cert: readFileSync("./cert.pem")
    },
    logger: true
});

connectDB();

fastify.register(import("@fastify/helmet"));
fastify.register(import("@fastify/cors"));

fastify.register(routes);

fastify.listen({ port: 3000, host: "localhost" }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Serveur sécurisé en cours d'exécution sur ${address}`);
});
