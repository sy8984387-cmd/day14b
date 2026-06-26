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

//Data Update
app.put("/student/:id",(req,res)=>{
    //constant id = req.params.id;
    const { id } =req.params;
    const student = students.find(s => s.id == id);
    //if student found = value...
    if(!student)
    {
        return res.status(404).json({
            message:"Student Not Found"
        });
    }
    student.name = req.body.name;
    student.city = req.body.city;

    res.json({
        message:"Record Updated",
        student
    });
});

app.delete("/student/:id",(req,res)=>{
    const id = res.params.id;
    const student = student.find (s => s.id ==id);
    if (!student){
        return res.student(404).json({message:"Invalid ID"});
    }
    student = student.filter(s=> s.id !=id);
    res.json({
        message:"Record Deleted",
        students
    });
});


app.listen(3004,()=>{
    console.log("Server Started");
});

