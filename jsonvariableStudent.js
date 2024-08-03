let Student ={
    "rollno" : "34",
    "name" :"Aditya",
    "age" : "19",
    "college" : "YCCE",
    "address" : {
        "line1" : "lit road",
        "line2" : "Ramnagar",
        "city" : "Nagpur",
        "state" : "Maharshtra"
    },
    "m1" : 45,
    "m2" : 46,
    "m3" : 44,
    "placed" :false,
}

display = (Student)=>{
    console.log(Student.rollno);
    console.log(Student.name);
    console.log(Student.age);
    console.log(Student.college);
    console.log(Student.address);
    console.log(Student.m1);
    console.log(Student.m2);
    console.log(Student.m3);
    console.log(Student.placed);
}
percent = (Student) =>{
    sum = (Student.m1+Student.m2+Student.m3);
    per =(sum/150)*100;
    return per;
}
// let Studentobj = JSON.parse(Student);
display(Student);
console.log(percent(Student));