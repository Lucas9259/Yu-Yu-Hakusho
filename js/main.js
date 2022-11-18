const list = document.querySelectorAll('.list')
function activeLink() {
    list.forEach((item) =>
    item.classList.remove('active'))
    this.classList.add('active')
}
list.forEach((item)=>
item.addEventListener('click',activeLink))


let logo =document.getElementById("Hakusho")    
let pika =document.getElementById("Urameshi")
let chari =document.getElementById("Hiei")
let bulba =document.getElementById("youko")
let farf =document.getElementById("Kuwabara")
let imgchange =document.getElementById("img-logo")


Urameshi.onclick = function(){
    imgchange.src = "assets/img/Urameshi.jpg"
}
Hiei.onclick = function(){
    imgchange.src = "assets/img/Hiei.jpg"
}
logo.onclick = function (){
    imgchange.src = "assets/img/logo.JPEG"
}
Kuwabara.onclick = function(){
    imgchange.src = "assets/img/Kuwabara.jpg"
}
youko.onclick = function(){
    imgchange.src = "assets/img/youko.jpg"
}
