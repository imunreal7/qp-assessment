import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite", // Change to a persistent storage location if needed
});

export default sequelize;

