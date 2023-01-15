console.log("this is inheritence");

const proto={
    description: function(){
        console.log(`this is ${this.name} description`);
    }
}

let Asad=Object.create(proto);
Asad.name="Asadulhaq";
Asad.age=20;
Asad.height=5.7;
console.log(Asad.description);