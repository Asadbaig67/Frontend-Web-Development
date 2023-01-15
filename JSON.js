let ele = {
    "asad": 'nyc',
    "age": 29,
    "height": 5.6
}

let myarray = [{
    "asad": 'nyc',
    "age": 29,
    "height": 5.6
}, {
    "asad": 'nyc',
    "age": 29,
    "height": 5.6
}, {
    "asad": 'nyc',
    "age": 29,
    "height": 5.6
}]

function GetTODOlistfrombackend() {
    let http = new XMLHttpRequest;  // Creating new instance
    http.onreadystatechange=function(){
        if(this.readyState==4){
            let responsetext=JSON.parse(this.responseText);
            for(var i=0;i<responsetext.length;i++){
                console.log(responsetext[i]);
            }
        }
    }
    http.open('GET', 'https://jsonplaceholder.typicode.com/todos', 'true');
    http.send();
}

GetTODOlistfrombackend();