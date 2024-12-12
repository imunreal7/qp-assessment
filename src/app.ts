import express from "express";
import bodyParser from "body-parser";
import adminRoutes from "./routes/adminRoutes";
import userRoutes from "./routes/userRoutes";
import sequelize from "./config/database";
import Grocery from "./models/Grocery";
import Order from "./models/Order";

const app = express();

app.use(bodyParser.json());

app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

// Sync database
sequelize.sync({ force: true }).then(() => console.log("Database synced"));

export default app;

