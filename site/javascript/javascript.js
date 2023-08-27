var a=null;
console.log(a);
let variable = true;

let template = "<div class='123'>"+ variable + "</div>";
template += `<div class='test'>${true}</div>`

document.querySelector('body').innerHTML = template;