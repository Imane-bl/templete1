/*let list =document.querySelector("ul");
let  links =document.querySelector(".lines");*/

let list = document.querySelector("ul");
let links = document.querySelector(".lines");


function  mOut(obj){
list.classList.remove("active");

}
function mOver(obj){

list.classList.add("active");
/*setTimeout(function () {
    list.classList.remove("active");
}, 8000);*/
}