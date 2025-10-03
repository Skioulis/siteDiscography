import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
// import session from "express-session";
import env from "dotenv";

const app = express();
const port = 3000;
env.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
    res.status(200).json({ message: "Hello World!" });
});

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}/`);
});