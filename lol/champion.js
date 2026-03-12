import db from "./db.js";

db.prepare(
    `
        CREATE TABLE IF NOT EXISTS champions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL
            role TEXT NOT NULL
            lane TEXT NOT NULL
            difficulty INTEGER
            blue_essence INTEGER
            damage_type TEXT NOT NULL
            images TEXT
            description TEXT NOT NULL

        )
    `
).run();

export const getAllChampions = () => {
    return db.prepare(`SELECT * FROM champions`).all();
}

export const getOneChampion = (id) => {
    return db.prepare(`SELECT * FROM champions WHERE id=?`).get();
}