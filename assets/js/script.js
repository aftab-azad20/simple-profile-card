$(document).ready(function (){




})

function a(){
    console.log("a")
}
function  b(){
    setTimeout(function (){
        console.log("ggg")
    },1000)
}
function c(){
    console.log("c")
}
a();
b();
c();