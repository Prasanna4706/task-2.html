 // arry of object is a collection where each element is an object with properties.this is uesd to group realted data together in a structured way
let details={
    name:"js",
    totalmark:100,
    subject:{
        dbms:100,
        java:100,
    },
    sum:function(){
        let total=this.subject.dbms+this.subject.java;
        return total;
    }
}
console.log(details.name);
console.log(details["totalmark"])
console.log(details.subject.dbms);
console.log(details.subject["java"]);
console.log(details.sum())
// object destructing is a syntax in js that allowa you to extract values from object and assign them to variables in a clean and readable way
let person={
    job:"softwareTester",
    salary:25000
}
const{ job:firstkey, salary:secondkey}=person
console.log(firstkey+" "+secondkey);

let arr=new Array(1,2,"three");
console.log(arr[2]);
let arr2=["js",true];
//array destructing
const[name,b1,b2]=arr2;
console.log(name)
//filter-returns a new array containing only the elements that match condition
let students=[
    {name:"prasanna",grade:"A"},
    {name:"joe",grade:"B"},
    {name:"john",grade:"A"},
]
let gradestudents=students.filter(student=>student.grade=="A")
console.log(gradestudents);
let