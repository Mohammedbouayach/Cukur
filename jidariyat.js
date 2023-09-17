let moon = document.getElementById("moon");
let body = document.querySelector("body")
let change = document.querySelector(".ditails")

let icon = document.querySelector(".icon");


let getmode = localStorage.getItem("mode");

if (getmode && getmode === "dark") {
 body.classList.add("dark");

}


change.addEventListener("click" ,()=>{
 body.classList.toggle("dark");
 
 if (body.classList.contains("dark")) {
  icon.classList.remove("fa-sun");
  icon.classList.add("fa-moon")
 }else{
icon.classList.add("fa-sun");
  icon.classList.remove("fa-moon")
 }
 
 if (!body.classList.contains("dark")) {
  return localStorage.setItem("mode", "lighet")
 }
 localStorage.setItem("mode", "dark")
})


let scrool = document.querySelector(".scrool");

window.onscroll= function(){
 if (scrollY >= 100) {
  scrool.style.display="block"
 }
 else{scrool.style.display="none"}
 
}

scrool.onclick = ()=>{
 
 scroll({
  top:0,
  left:0,
  behavior:"smooth"
 })
}

