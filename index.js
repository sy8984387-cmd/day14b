const express = require("express");

const app =express ();

let students =[
    {id: 1, name : "Satyam", city:"Gorakhpur"},
    {id: 2, name : "Gaurav", city: "Sahjanwa"}
];

app.use(express.json());

app.get("/",(res,req)=>{
    res.send("API IS RUNING");
});

app.get("/students",(req,res)=>{
    res.json({
        message:"All Student",
        data:students
    });
});

app.post("/students",(req,res)=>{
    const { id, name ,city } = req.body;
    const newStudent = {id, name , city };
    students.push(newStudent);
    res.json({
        message:"Record Added",
        student:newStudent,
        data:students
    });
});

app.listen(3004,()=>{
    console.log("Server Started");
});

