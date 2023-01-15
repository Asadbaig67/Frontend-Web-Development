$(document).ready(function () {
    let count = 2;
    let List = $('#ul-id');
    let InBox = $('#in-id');
    let InText = ''; //Initialize

    // we cannot use this in jquery
    // InBox.addEventListener('input', function (e) {
    //     InText = e.target.value;
    // });
    // INSTEAD USING THIS
    // InBox.input(function () {
    //     InText = InBox.val();
    // });

    InBox.on({
        'input': function (e) {
            InText = InBox.val();
        }
    })

    // ADDING ELEMENTS USING JQUERY

    // let newlist = "<li>this is an element</li>";
    // let newlist1 = "<li>this is an element1</li>";
    // let newlist2 = "<li>this is an element2</li>";
    // let newlist3 = "<li>this is an element3</li>";
    // let newlist4 = "<li>this is an element4</li>";
    // List.append(newlist, newlist1, newlist2, newlist3, newlist4);
    // $('li').eq(3).remove();

    function addlistitem(InText) {
        if (InText != undefined && InText != null && InText != ' ') {
            let newElement = document.createElement('l1');
            let textnode = document.createTextNode(InText);
            let br = document.createElement("br");
            newElement.appendChild(textnode);
            newElement.appendChild(br);
            newElement.id = 'Item-' + count++;
            List.append(newElement);
            $('#in-id').val('');
            InText = ' ';
        }
        else {
            alert("Please Type Input");
        }
    }
    // btn_Element.addEventListener('click', addlistitem);

    // For jquery we cannot use this addEventListener function
    // btn_Element.addEventListener('click', postingdataatbackend);
    $('#btn-id').click(postingdataatbackend); //using jquery

    function AddtextfromBackEnd(id, title) {
        let N_ele = document.createElement('li');
        let mytext = document.createTextNode(title);
        let br = document.createElement('br');
        N_ele.appendChild(mytext);
        N_ele.appendChild(br);
        N_ele.id = id;
        List.append(N_ele);
    }

    function GetTODOlistfrombackend() {
        // WRITTEN USING JQUERY

        $.get('https://jsonplaceholder.typicode.com/todos', function (data, status) {
            if (this.readyState == 4) {
                let responsetext = data;
                for (var i = 0; i < responsetext.length; i++) {
                    AddtextfromBackEnd(responsetext[i].id, responsetext[i].title);
                }
            }
        });
        //WRITTEN WITHOUT JQUERY

        // let http = new XMLHttpRequest;  // Creating new instance
        // http.onreadystatechange = function () {
        //     if (this.readyState == 4) {
        //         let responsetext = JSON.parse(this.responseText);
        //         for (var i = 0; i < responsetext.length; i++) {
        //             AddtextfromBackEnd(responsetext[i].id, responsetext[i].title);
        //         }
        //     }
        // }
        // http.open('GET', 'https://jsonplaceholder.typicode.com/todos', 'true');
        // http.send();
    }

    GetTODOlistfrombackend();

    function postingdataatbackend() {
        // let http = new XMLHttpRequest;
        // http.open('POST', 'https://jsonplaceholder.typicode.com/todos', 'true');
        // http.onreadystatechange = function () {
        //     if (this.readyState == 4) {
        //         let responsetext = JSON.parse(this.responseText);
        //         AddtextfromBackEnd(responsetext.id, InText);
        //     }
        // }
        let obj = {
            "user id": 201,
            "title": InText,
            "completed": true
        };
        // http.send(obj);
        $.post('https://jsonplaceholder.typicode.com/todos', obj, function (data, status) {
            if (this.readyState == 4) {
                let responsetext = data;
                AddtextfromBackEnd(responsetext.id, InText);
            }
        })
    }
})

