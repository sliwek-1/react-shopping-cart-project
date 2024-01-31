import { Sequelize } from "sequelize";

export let sequelize = new Sequelize({
    define: {
        timestamps: false,
    },
    dialect: "mysql",
    username: "root",
    password: "",
    database: "shop"
})


sequelize.authenticate()
                .then(() => {
                    console.log('Connection is good');
                }).catch((error) => {
                    console.log('Something went wrong ' + error)
                })