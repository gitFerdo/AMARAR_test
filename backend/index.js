import express from "express";
import mysql from "mysql2";
import cors from "cors";
import bodyParser from "body-parser";


const app = express()
app.use(bodyParser.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"amarar"
})

app.use(express.json());
app.use(cors());

app.get("/donations", (req,res)=>{
    const q = "SELECT * FROM amarar.donations"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/donations",(req,res)=>{
    console.log("Received donation request:", req.body);
    const q = "INSERT INTO donations (username, email, type, comment) VALUES (?, ?, ?, ?)";
    const values = [
        req.body.username,
        req.body.email,
        req.body.type,
        req.body.comment

    ]

    db.query(q,values,(err,data)=>{
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json(err);
        }
        console.log("Insert successful");
        return res.status(200).json({ message: 'Insert successful' });
    });
})
app.listen(8081 , ()=> {
    console.log("connected to backend!")
})
