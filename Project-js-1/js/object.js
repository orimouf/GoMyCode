/*
const person={
    firstName:"abderraouf",
    lastName:"harrouche",
    age:"28",
    country:"Algeria",
    city:"jijel",
    skills:[
        "html",
        "css",
        "javascript",
        "php",
        "Node",
        "MongoDB",
        "React",
        "Python",
        "mysql"
    ],
    isMarried: false,
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(person);
console.log(person.getFullName());*/

class Person {
    constructor(firstName,lastName,age,country,city,isMarried){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.skills = [];
        this.isMarried = isMarried;
    }

    get fullName(){
        const fullName = this.firstName+" "+this.lastName;
        return fullName;
    }

    /**
     * @param {(arg0: string) => void} skill
     */
    set setSkills(skill){
        this.skills.push(skill);
    }
    
    get getSkills(){
       // if(x != ""){
            //return this.skills;
       // } else {
            for(let i=0;i<= this.skills.length;i++){
                return this.skills[i];
            }
        //}
    }

}

class Student extends Person {
    constructor(firstName,lastName,age,country,city,isMarried,gender){
        super(firstName,lastName,age,country,city,isMarried);
        this.gender = gender;
    }
}


const student1 = new Student("abderrouf","harrouche",28,"Algeria","jijel",false,"male");

student1.setSkills = "HTML";
student1.setSkills = "JavaScript";
student1.setSkills = "CSS";
student1.setSkills = "Node";


console.log(student1);

console.log(student1.getSkills(3));

/*
const dog = {
    name:'Max',
    legs:'',
    color:'',
    age:'',
    bark:'woof woof'
};

console.log(dog);
*/