// console.log("War Gye Bai");

// 1. HTTP REQUESTS USING XHR OBJECT

// Code example to send a get request to fetch data 
// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
// xhr.onprogress = function () {
//     console.log("Mein aaraha hu ma bht jald aa raha hu ");
// }
// xhr.onload = function () {
//     let obj = (this.responseText);
//     console.log(obj);
// }
// xhr.send();

// 2. USING PROMISES
// let students = [
//     { name: "Asad", subject: "web-technologies" },
//     { name: "Dawood", subject: "web-technologies" },
//     { name: "Ehtisham", subject: "web-technologies" },
//     { name: "Hamza Sheikh", subject: "web-technologies" }
// ]

// function Enroll_Students(newStudent) {
//     return new Promise(function (resolve, reject) {
//         students.push(newStudent);
//         console.log("New student has been successfully enrolled");
//         const error = false;
//         if (!error) {
//             resolve();
//         }
//         else {
//             reject();
//         }
//     })
// }
// function ShowAllStudents() {
//     students.map((element) => {
//         console.log(`${element.name} has enrolled in ${element.subject}`);
//     })
// }

// let newStudent = { name: "Hassaan Ahmed", subject: "web-technologies" };
// Enroll_Students(newStudent).then(ShowAllStudents).catch(err => console.log("hdhkjsadkjsakjdsa", err));
// ShowAllStudents();

// 1. USING FETCH API TO GET DATA

// let GetData = () => {
//     url = "https://api.github.com/users";
//     fetch(url).then(res => res.json()).then(data => console.log(data))
// }
// GetData();


// 2. USING FETCH API TO POST DATA
// let Postdata = () => {

//     data = '{"name":"testsdssd","salary":"123","age":"23"}';
//     url = "	https://dummy.restapiexample.com/api/v1/create";
//     params = {
//         method: 'POST',
//         headers: {
//             'Content-Type': "application/json"
//         },
//         body: data
//     }
//     fetch(url, params).then(res => res.json()).then(data => console.log(data))
// }
// Postdata();

// 2.1 USING FETCH API
// let Postdata = () => {

//     data = '{"name":"testsdssd","salary":"123","age":"23"}';
//     url = "	https://api.github.com/users";
//     // params = {
//     //     method: 'POST',
//     //     headers: {
//     //         'Content-Type': "application/json"
//     //     },
//     //     body: data
//     // }
//     fetch(url).then(res => res.json()).then(data => console.log(data))
// }
// Postdata();


// 3. USING ASYNC AND AWAIT
let Getdatafromackend = (data) => {
    return data;
}
let getmydata = async () => {
    url = "https://dummy.restapiexample.com/api/v1/employees";
    const response = await fetch(url);  //waiting for promise to resolve
    const user = await response.json(); //waiting for promise to resolve
    return user;
}
let employees = {};
getmydata().then((data) => {
    
}).catch(err => console.log(err))

