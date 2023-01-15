let N_ame = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('number');
let Error_N=document.getElementById('name-error');
let Error_E=document.getElementById('Email-error');
let Error_P=document.getElementById('Phone-error');


N_ame.addEventListener('blur', () => {

    let regex = /^[a-zA-Z]{0,20}$/;
    let str = N_ame.value;
    if (regex.test(str)) {
        console.log("Valid Name");
        Error_N.style.display='none';
    }
    else {
        console.log("Invalid Name");
        Error_N.style.display='block';
    }
});
email.addEventListener('blur', (e) => {

    let regex = /[a-zA-Z0-9]+\@(gmail|yahoo|outlook)\.com/;
    let str = email.value;
    if (regex.test(str)) {
        console.log("Valid Emial");
        Error_E.style.display='none';
    }
    else {
        console.log("Invalid Email");
        Error_E.style.display='block';
    }

});
phone.addEventListener('blur', (e) => {


    let regex = /^03[\d]{9}$/;
    // let regex = /(\+92)?\s[\d]{10}$/;
    let str = phone.value;
    if (regex.test(str)) {
        console.log("Valid Phone Number");
        Error_P.style.display='none';
    }
    else {
        console.log("Invalid Phone Number");
        Error_P.style.display='block';
    }

});

