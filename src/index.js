import { connectDB } from "./config/db.js";
import { startServer } from "./server.js";

connectDB().then(startServer);