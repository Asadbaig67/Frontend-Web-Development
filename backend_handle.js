let count = 2;
let InBox = document.getElementById('in-id');
let btn_Element = document.getElementById('btn-id');
let List = document.getElementById('ul-id');
let InText = ''; //Initialize
InBox.addEventListener('input', function (e) {
    InText = e.target.value;
});
function addlistitem(InText) {
    if (InText != undefined && InText != null && InText != ' ') {
        let newElement = document.createElement('l1');
        let textnode = document.createTextNode(InText);
        let br = document.createElement("br");
        newElement.appendChild(textnode);
        newElement.appendChild(br);
        newElement.id = 'Item-' + count++;
        List.appendChild(newElement);
        InBox.value = ' ';
        InText = ' ';
    }
    else {
        alert("Please Type Input");
    }
}
// btn_Element.addEventListener('click', addlistitem);
btn_Element.addEventListener('click', postingdataatbackend);

function AddtextfromBackEnd(id, title) {
    let N_ele = document.createElement('li');
    let mytext = document.createTextNode(title);
    let br = document.createElement('br');
    N_ele.appendChild(mytext);
    N_ele.appendChild(br);
    N_ele.id = id;
    List.appendChild(N_ele);
}

function GetTODOlistfrombackend() {
    let http = new XMLHttpRequest;  // Creating new instance
    http.onreadystatechange = function () {
        if (this.readyState == 4) {
            let responsetext = JSON.parse(this.responseText);
            for (var i = 0; i < responsetext.length; i++) {
                AddtextfromBackEnd(responsetext[i].id, responsetext[i].title);
            }
        }
    }
    http.open('GET', 'https://jsonplaceholder.typicode.com/todos', 'true');
    http.send();
}

GetTODOlistfrombackend();
function postingdataatbackend() {
    let http = new XMLHttpRequest;
    http.open('POST', 'https://jsonplaceholder.typicode.com/todos', 'true');
    http.onreadystatechange = function () {
        if (this.readyState == 4) {
            let responsetext = JSON.parse(this.responseText);
            AddtextfromBackEnd(responsetext.id,InText);
        }
    }
    let data = JSON.stringify({
        "user id": 201,
        "title": InText,
        "completed": true
    });
    http.send(data);
}
