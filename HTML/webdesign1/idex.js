
let clicked;
function doThis(){
    console.log("clicked")
    let clicked = document.getElementById("as-input").value;
    document.getElementById("asl-image").src = `Sign_language_${clicked}.svg` 
    console.log(clicked);
}
if(label==clicked){
    document.getElementById('happy').style.animation = "animate 2s 2s forward";
}
else{
    document.getElementById('sad').style.animation = "animate 2s 2s forward";
}