import express from "express";
import * as db from "./champion.js";

const app = express();
const PORT = 8005;
app.use(express.json());

app.get("/champions", (req, res) => {
    let champions = db.getAllChampions();
    res.status(200).json(champions)
});

app.get("/champions/:id", (req, res) => {
    const id = req.params.id;
    let champion = db.getOneChampion(id)
    if(!champion) {
        res.status(404).json({message: "A champion nem található"})
    }
    res.status(200).json(champion)
})

app.listen(PORT, () => {
    console.log(`Server runs on ${PORT}`)
});