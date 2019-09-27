
var students = [
    {
        name: "Joy",
        level: 300,
        gender: "female",
        age: 28,
        grade: 100,
    },
     {
        name: "Josephine",
        level: 300,
        gender: "female",
        age: 18,
        grade: 90,
     },
    {
        name: "yness",
        level: 300,
        gender: "male",
        age: 18,
        grade: 80,
    },
    {
        name: "Vicky",
        level: 300,
        gender: "female",
        age: 12,
        grade: 90,
     },
];

// function createtable(){ creating a 

// }
// var createTable2 = ()=>{ this is another way 4 creating a function it is called anonymous fxn
    
// }
var table = document.getElementById("table")
var thead = document.createElement("thead")
var trhead = document.createElement("tr")
var th1 = document.createElement("th")
var th2 = document.createElement("th")
var th3 = document.createElement("th")
var th4 = document.createElement("th")
var th5 = document.createElement("th")

function tableHead(){
    th1.innerHTML = "Name";
    th2.innerHTML = "Level";
    th3.innerHTML = "Gender";
    th4.innerHTML = "Age";
    th5.innerHTML = "Grade";
    trhead.append(th1,th2,th3,th4,th5);
    thead.append(trhead);
    table.appendChild(thead);
}


var createTable2 = ()=>{
    // tr.innerHTML="";
    tableHead();
    students.forEach((students)=> {
       
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.innerHTML = students.name;
        td1.style.textAlign ="center";
        td1.style.color = "white";
        td1.style.backgroundColor="purple";
        var td2 = document.createElement('td');
        td2.innerHTML = students.level;
        td2.style.textAlign ="center";
        td2.style.color = "white";
        td2.style.backgroundColor="purple";
        var td3 = document.createElement('td');
        td3.innerHTML = students.gender;
        td3.style.textAlign ="center";
        td3.style.color = "white";
        td3.style.backgroundColor="purple";
        var td4 = document.createElement('td');
        td4.innerHTML = students.age;
        td4.style.textAlign ="center";
        td4.style.color = "white";
        td4.style.backgroundColor="purple";
        var td5 = document.createElement('td');
        td5.innerHTML = students.grade;
        td5.style.textAlign ="center";
        td5.style.color = "white";
        td5.style.backgroundColor="purple";

        tr.append(td1, td2, td3, td4, td5);
table.appendChild(tr);

})
}





createTable2();

var Name = document.getElementById("name");
var level = document.getElementById("level");
var gender = document.getElementById("gender");
var age = document.getElementById("age");
var grade = document.getElementById("grade");

// var btn = document.getElementById("btn");

// var clickHandle = (event) =>{
//     name.value
// };

// btn.addEventListener("click",(clickHandle))

document.getElementById("btn").addEventListener("click", () => {
    // console.log(Name.value, level.value, gender.value, age.value, grade.value);
table.innerHTML="";
    var student = {
        name: Name.value,
        level: level.value,
        gender: gender.value,
        age:  age.value,
        grade: grade.value
    };
   

    students.push(student);
   createTable2()
})