const mailScene =
document.getElementById("mailScene");

const music =
document.getElementById("music");


mailScene.onclick = () => {

mailScene.classList.toggle("open");

music.play();

};


mailScene.onkeydown = (e)=>{

if(e.key==="Enter" || e.key===" "){

mailScene.classList.toggle("open");

music.play();

}

};