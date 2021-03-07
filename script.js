let hover = document.getElementById("photo");
let move = document.getElementById("move");
hover.addEventListener('mousemove', function(){
    move.style.display="flex";
});
hover.addEventListener('mouseout', function(){
    move.style.display="none";
});

let del = document.getElementById("del");
let diss = document.getElementById("hover");
del.addEventListener("click", function(){
    diss.style.display= "none";
});
