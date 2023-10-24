
import inquirer from "inquirer"

class Student {
    name:string
    constructor(name:string) {
        this.name=name
    }
}


class Person {
    student:Student[]=[]
    addStudent(obj:Student){
        this.student.push(obj)
    }
}

const persons = new Person()
const programmStart= async(persons:Person)=>{
    do{
        console.log("Wellcome Stranger")
    let ans = await inquirer.prompt({
        type:"list",
        message:"Would you like to talk to yourself?",
        name:"Select",
        choices:["yourself","student","Exit"]

    })
if (ans.Select =="yourself" ){
    console.log("I am talking to myself")
    console.log("I am fine")
}
if (ans.Select =="student" ){
    const ans = await inquirer.prompt({
        type:"input",
        message:"Which Student do you want to talk to?",
        name:"Student"
    })
    

    let student = persons.student.find(val => val.name ==ans.Student)
    if(!student){
      const name = new Student(ans.Student)
        persons.addStudent(name)
        console.log(`Hello I am ${name}, and I am fine`)
        console.log(persons.student)
    }

    if(student){
        console.log(`Hello I am ${student.name}, and I am fine............`)
        console.log(persons.student)
    }
}

if (ans.Select =="Exit" ){
    process.exit()
}
}while(true)
}
programmStart(persons)