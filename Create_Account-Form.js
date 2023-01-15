
let U_name = document.getElementById('Username');
let e_mail = document.getElementById('Email');
let password = document.getElementById('password');
let pass_check = document.getElementById('Password-check');


U_name.addEventListener('blur', () => {
    let form = U_name.parentElement;
    let small = form.querySelector('small');
    let regex = /^[(0-9)?\_a-zA-Z0-9]{8,15}$/;
    let str = U_name.value.trim();
    if (regex.test(str) && str != '') {
        form.classList.add('success');
        form.classList.remove('error');
    }
    else if (str == '') {
        form.classList.add('error');
        form.classList.remove('success');
        small.innerHTML = "Username is required!!";
    }
    else if (str != '' && regex.test(str) == 'false') {
        form.classList.add('error');
        form.classList.remove('success');
        small.innerHTML = "Invalid Username";
    }
});
e_mail.addEventListener('blur', () => {
    let form = e_mail.parentElement;
    let regex = /[a-zA-Z0-9]+\@(gmail|yahoo|outlook)\.com$/;
    let str = e_mail.value.trim();
    if (regex.test(str) && str != '') {
        form.classList.add('success');
        form.classList.remove('error');
    }
    else if (regex.test(str) == 'false' && str != '') {
        console.log("Invalid Email");
        form.classList.remove('success');
        form.classList.add('error');

    }
    else {
        console.log("Email is required!!");
        form.classList.remove('success');
        form.classList.add('error');
    }
});
pass_check.addEventListener('blur', () => {
    let form = pass_check.parentElement;
    let pervform = password.parentElement;
    let prevsmall = pervform.querySelector('small');
    let small = form.querySelector('small');
    if (password.value == pass_check.value) {
        pervform.classList.add('success');
        pervform.classList.remove('error');
        form.classList.add('success');
        form.classList.remove('error');
        small.style.visibility = 'visible';
        prevsmall.style.visibility = 'visible';
        small.style.color = '#2ecc71';
        prevsmall.style.color = '#2ecc71';
        small.innerHTML = "Success!";
        prevsmall.innerHTML = 'Success!';
    }
    else {
        form.classList.add('error');
        form.classList.remove('success');
        small.style.visibility = 'visible';
        small.style.color = '#e74c3c';
        small.innerHTML = "Your Password does'nt match";
    }
});