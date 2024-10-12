function myFunc() {
    document.getElementById("i1").style.display = "block"
    document.getElementById("log1").innerHTML = "Sign-in"
    document.getElementById("b2").style.background = "blue"
    document.getElementById("b2").style.color = "white"
    document.getElementById("b1").style.color = "black"
    document.getElementById("b1").style.background = "white"
    document.getElementById("log1").style.color = "blue"
    document.getElementById("forg").style.display = "none"
    document.getElementById("con").innerHTML = "sign-in"

}
function but1() {
    document.getElementById("b2").style.color = "black"
    document.getElementById("b2").style.background = "white"
    document.getElementById("b1").style.color = "white"
    document.getElementById("b1").style.background = "blue"
    document.getElementById("log1").innerHTML = "Login"
    document.getElementById("i1").style.display = "none"
    document.getElementById("log1").style.color = "blue"
    document.getElementById("forg").style.display = "block"
    document.getElementById("con").innerHTML = "login"

}
function able() {
    alert('Welcome to my invisible website')
}