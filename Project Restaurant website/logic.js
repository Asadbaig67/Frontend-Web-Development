// console.log('color = ' + window.getComputedStyle(document.documentElement).getPropertyValue('--purple-color'));
// let mycolor = $("body").get(0).style.getPropertyValue('--purple-color');
// document.body.style.setProperty('--foo-bar', newValue);//set
let bodyStyles = window.getComputedStyle(document.documentElement);
let mycolor = bodyStyles.getPropertyValue('--purple-color'); //get
let original_color = " #880e4f";

$('.nav-btn-toggle').click(() => {

    if (mycolor == original_color) {
        document.body.style.setProperty('--purple-color', '#37474F'); //set grey color
        original_color = " #37474F";
    }
    else {
        document.body.style.setProperty('--purple-color', '#880e4f');
        original_color = " #880e4f";

    }
});
