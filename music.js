let moon = document.getElementById("moon");

let body = document.querySelector("body")
let change = document.querySelector(".ditails")

let icon = document.querySelector(".icon");

let getmode = localStorage.getItem("mode");

if (getmode && getmode === "dark" ) {
body.classList.add("dark");

}


change.addEventListener("click", () => {
 body.classList.toggle("dark");

 if (body.classList.contains("dark")) {
  icon.classList.remove("fa-sun");
  icon.classList.add("fa-moon")
 } else {
  icon.classList.add("fa-sun");
  icon.classList.remove("fa-moon")
 }
 if (!body.classList.contains("dark")) {
 return localStorage.setItem("mode","lighet")
 }
localStorage.setItem("mode","dark")
 
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



function search(){
 let search = document.getElementById("search").value;
 
 let music =document.getElementById("photos");
 let player = document.querySelectorAll(".player");
 let nameMuzik = document.getElementsByTagName("h4");
 
 for (let i = 0; i <nameMuzik.length; i++) {
  if (nameMuzik[i].innerHTML.indexOf(search)>=0) {
   
   player[i].style.display=""
  }
  else{player[i].style.display="none"}
 }
 
 


}