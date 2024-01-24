var currentDate = new Date()
var hour = currentDate.getHours()

if (hour < 12){
    document.querySelector(".greet").innerHTML = "Good morning"
}
else if (hour < 18){
    var span = document.body.querySelector(".greet").innerHTML = "Good afternoon"
}
else if (hour < 21){
    document.body.querySelector(".greet").innerHTML = "Good evening"
}
else{
    document.body.querySelector(".greet").innerHTML = "Good night"
}

// var play = document.querySelector(".play")
// play.addEventListener("mouseenter", ()=>{
//     play.removeAttribute("hidden")
// })