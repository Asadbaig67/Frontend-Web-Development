

let subbtn = document.getElementById('btn');
let input1 = document.getElementById('in1');
let input2 = document.getElementById('in2');
let msg=document.getElementById('ermsg');
function handle() {

    if(input1.value==""){
        alert("Input cannot be blank please fill");
        input1.classList.replace('error');
        msg.style.display="block";
    }

}
input1.addEventListener('blur', handle)





function handleclick() {
    alert("You Clicked This button");
    subbtn.classList.replace('green','red');
}

subbtn.addEventListener('click', handleclick);
