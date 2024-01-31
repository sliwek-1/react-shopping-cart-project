import { DataTypes } from "sequelize";
import { sequelize } from "./connection.js";

export let shop = sequelize.define('shop', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING
    },
    src: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.FLOAT
    },
    description: {
        type: DataTypes.STRING
    }
})

sequelize.sync()
            .then(() => {
                console.log('Data base is updated')
            }).catch((error) => {
                console.log('Something went wrong with update ' + error)
            })