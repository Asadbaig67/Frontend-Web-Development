
// This Is Object Literal
let myobj = {
    name: 'asad',
    roll_no: 667,
    semester: 7,
    university: 'UET'
}

// console.log(myobj);

// This is Constructor Function

function generalfun(newname, newroll, newsemester, newUni) {
    this.name = newname;
    this.roll_no = newroll;
    this.semester = newsemester;
    this.university = newUni;
    

// Now using the new prototype

// generalfun.prototype.setname = function (newName) {
//     this.name = newName;
// }
generalfun.prototype.setname= function(Nname){
    this.name=Nname;
}
}
generalfun.prototype.getname=function(){
    return this.name;
}

let mysecobj = new generalfun('Lukman', 705, 5, 'UET');
console.log(mysecobj);