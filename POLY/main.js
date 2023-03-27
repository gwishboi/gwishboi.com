window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0)
})
var yakho = document.getElementById("yakho");
var icon = document.getElementById("icon");
icon.onclick= function(){
    if(yakho.paused){
        yakho.play();
        icon.src="./pause.png";
    }else{
        if(yakho.paused)
            yakho.pause();
            icon.src="./play.png";
  }
}