
var name = "salih"
var age = 42
var name_object = {firstname: "salih", lastname:"yılmazoglu"};
var truth = true
var sheets = ["HTML","CSS"]
var a = null

var student = {
    firstname : "Salih",
    lastname : "yılmazoglu",
    age : 42,
    height : 179,

    fullname : function(){
        return this.firstname+" "+this.lastname
    }
}
const agevalue = student.age

console.log(agevalue);
console.log(student.fullname());

