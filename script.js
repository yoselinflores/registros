let signUp = document.getElementById("signUp");
let signIp = document.getElementById("signIp");
let naneInput=document.getElementById("naneImput")
let title=document.getElementById("title")

signIp.onclick = function() {
    naneInput.style.maxHeight="0";
    title.innerHTML="login";
    signUp.classList.add("disable");
    signIp.classList.remove("disable");
}
signUp.onclick = function() {
    naneInput.style.maxHeight="60px";
    title.innerHTML="registro";
    signUp.classList.remove("disable");
    signIp.classList.add("disable");
}