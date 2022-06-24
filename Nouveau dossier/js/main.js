document.forms[0].addEventListener("submit", onSubmit1);
document.querySelector("#erase1").addEventListener("click", onClick1);
function onSubmit1(e) {
    e.preventDefault();
    let x = document.querySelector("#nom");
    document.querySelector("#div1").innerHTML = x.value;
}
function onClick1(e) {
    e.preventDefault();
    document.querySelector("#div1").innerHTML = "";
}

document.forms[1].addEventListener("submit", onSubmit2);
document.querySelector("#erase2").addEventListener("click", onClick2);
function somme(a,b) {
    return a+b;
}
function onSubmit2(e) {
    e.preventDefault();
    let x = parseInt(document.querySelector("#num1").value);
    let y = parseInt(document.querySelector("#num2").value);
    let z = somme(x, y)
    console.log(Number.isInteger(z));
    console.log(z);
    document.querySelector("#div2").innerHTML = z;
}
function onClick2(e) {
    e.preventDefault();
    document.querySelector("#div2").innerHTML = "";
}